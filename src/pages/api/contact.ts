import type { APIRoute } from "astro";

export const prerender = false;

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();

  const honeypot = String(form.get("website") ?? "");
  if (honeypot) {
    return new Response(null, { status: 200 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const company = String(form.get("company") ?? "").trim();

  if (!name || !email || !message) {
    return Response.redirect(
      new URL("/?contacto=invalido&motivo=campos#contacto", request.url),
      303,
    );
  }

  if (!isValidEmail(email)) {
    return Response.redirect(
      new URL("/?contacto=invalido&motivo=email#contacto", request.url),
      303,
    );
  }

  const apiKey = import.meta.env.BREVO_API_KEY;
  const senderEmail = import.meta.env.BREVO_SENDER_EMAIL;
  const toEmail = import.meta.env.BREVO_TO_EMAIL;

  if (!apiKey || !senderEmail || !toEmail) {
    return Response.redirect(
      new URL("/?contacto=error#contacto", request.url),
      303,
    );
  }

  const textContent = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    company ? `Empresa: ${company}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlContent = [
    `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : null,
    `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
  ]
    .filter(Boolean)
    .join("");

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8_000);

  let upstream: Response;
  try {
    upstream = await fetch(BREVO_API_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "DevOptions", email: senderEmail },
        to: [{ email: toEmail, name: "DevOptions" }],
        replyTo: { email, name },
        subject: `Nuevo contacto — ${name}`,
        textContent,
        htmlContent,
      }),
    });
  } catch (err) {
    const reason =
      err instanceof Error && err.name === "AbortError"
        ? "Brevo timeout (>8s)"
        : String(err);
    console.error("Brevo fetch failed:", reason);
    return Response.redirect(
      new URL("/?contacto=error#contacto", request.url),
      303,
    );
  } finally {
    clearTimeout(timeoutId);
  }

  if (!upstream.ok) {
    const errorBody = await upstream.text();
    console.error("Brevo error:", upstream.status, errorBody);
    return Response.redirect(
      new URL("/?contacto=error#contacto", request.url),
      303,
    );
  }

  return Response.redirect(new URL("/?contacto=ok#contacto", request.url), 303);
};
