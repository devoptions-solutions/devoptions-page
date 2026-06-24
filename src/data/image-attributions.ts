export interface ImageAttribution {
  usage: string;
  photographer: {
    name: string;
    href: string;
  };
  photo: {
    label: string;
    href: string;
  };
}

export const imageAttributions: ImageAttribution[] = [
  {
    usage: "Página «Desarrollo seguro»",
    photographer: {
      name: "Growtika",
      href: "https://unsplash.com/es/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    photo: {
      label: "Un ordenador con teclado y ratón",
      href: "https://unsplash.com/es/fotos/un-ordenador-con-teclado-y-raton-9WnjxT1NCoY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
  },
  {
    usage: "Recursos gráficos del sitio",
    photographer: {
      name: "Daniil Komov",
      href: "https://unsplash.com/es/@dkomow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    photo: {
      label: "Pantalla de ordenador mostrando código",
      href: "https://unsplash.com/es/fotos/pantalla-de-ordenador-mostrando-codigo-con-un-menu-contextual-bglsBQQwMWA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
  },
  {
    usage: "Banner de llamada a la acción",
    photographer: {
      name: "KOBU Agency",
      href: "https://unsplash.com/es/@kobuagency?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    photo: {
      label: "Texto de hello world",
      href: "https://unsplash.com/es/fotos/texto-de-hola-mundo-67L18R4tW_w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
  },
  {
    usage: "Página «Implementación»",
    photographer: {
      name: "Growtika",
      href: "https://unsplash.com/es/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    photo: {
      label: "Imagen generada por computadora de una computadora",
      href: "https://unsplash.com/es/fotos/una-imagen-generada-por-computadora-de-una-computadora-WELyMatW3mw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
  },
  {
    usage: "Página «Auditoría de datos»",
    photographer: {
      name: "Growtika",
      href: "https://unsplash.com/es/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    photo: {
      label: "Fotografía en Unsplash",
      href: "https://unsplash.com/es/fotos/YKHrIEELtMo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
  },
];

export const unsplashLicenseUrl = "https://unsplash.com/es/license";
