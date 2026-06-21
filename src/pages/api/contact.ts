// src/pages/api/contact.ts
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  // Validación básica
  if (!name || !email || !message) {
    return new Response("Faltan campos", { status: 400 });
  }

  const accessKey = import.meta.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return new Response("Configuración incompleta", { status: 500 });
  }

  const upstream = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      company: form.get("company"),
      subject: "Nuevo contacto — DevOptions",
    }),
  });

  const result = await upstream.json();

  if (!result.success) {
    return new Response("No se pudo enviar", { status: 502 });
  }

  // Opción A: redirect clásico tras enviar formulario HTML
  // return Response.redirect(new URL("/?contacto=ok#contacto", request.url), 303);

  // Opción B: respuesta JSON (si usas fetch desde JS en el cliente)
  return Response.json({ ok: true });
};
