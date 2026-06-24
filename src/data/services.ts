import type { ImageMetadata } from "astro";
import RocketIcon from "@assets/rocket.svg";
import SecurityIcon from "@assets/security.svg";
import ServerIcon from "@assets/server.svg";
import SecureDeveloperImage from "@assets/images/growtika-9WnjxT1NCoY-unsplash.webp";
import DataAuditImage from "@assets/images/growtika-YKHrIEELtMo-unsplash.webp";
import ImplementationImage from "@assets/images/growtika-WELyMatW3mw-unsplash.webp";

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  cardDescription: string;
  pageTitle: string;
  heading: string;
  description: string;
  highlightsIntro: string;
  highlights: ServiceHighlight[];
  image: ImageMetadata;
  imageAlt: string;
  icon: ImageMetadata;
  iconBg: string;
}

export const services: Service[] = [
  {
    id: "secure-developer",
    title: "Desarrollo seguro",
    cardDescription:
      "Aplicaciones web y APIs con prácticas de seguridad desde el código.",
    pageTitle: "Desarrollo seguro | DevOptions",
    heading: "Software fiable, construido con seguridad desde el código",
    description:
      "En DevOptions desarrollamos sistemas fiables, guiados por buenas prácticas de seguridad para brindarte la calidad que necesitas: desde páginas web hasta APIs robustas de alta concurrencia.",
    highlightsIntro:
      "Cada entrega combina calidad técnica, rendimiento y protección de datos en cada capa del sistema.",
    highlights: [
      {
        title: "Páginas web",
        description:
          "Sitios rápidos, accesibles y mantenibles con arquitectura pensada para crecer.",
      },
      {
        title: "APIs robustas",
        description:
          "Servicios de alta concurrencia con validación, autenticación y observabilidad.",
      },
      {
        title: "Seguridad integrada",
        description:
          "Buenas prácticas desde el diseño: revisión de código, hardening y cumplimiento.",
      },
    ],
    image: SecureDeveloperImage,
    imageAlt:
      "Equipo de desarrollo trabajando en arquitectura de software segura",
    icon: RocketIcon,
    iconBg: "bg-brand-1/20",
  },
  {
    id: "data-audit",
    title: "Auditoría de datos",
    cardDescription:
      "Revisión de vulnerabilidades, accesos y cumplimiento normativo.",
    pageTitle: "Auditoría de datos | DevOptions",
    heading:
      "Detectamos los puntos ciegos antes de que se conviertan en un problema",
    description:
      "Identificamos los puntos ciegos antes de que se conviertan en un problema. Sometemos tu información a una radiografía profunda para detectar brechas, asegurar el control de accesos y garantizar que tu infraestructura cumpla con las normativas más exigentes.",
    highlightsIntro:
      "Un diagnóstico claro de riesgos con recomendaciones accionables para proteger tu información y cumplir con el marco regulatorio.",
    highlights: [
      {
        title: "Detección de brechas",
        description:
          "Análisis exhaustivo de vulnerabilidades en datos, aplicaciones e integraciones.",
      },
      {
        title: "Control de accesos",
        description:
          "Revisión de permisos, roles y políticas para reducir exposición innecesaria.",
      },
      {
        title: "Cumplimiento normativo",
        description:
          "Evaluación frente a marcos exigentes como GDPR, ISO 27001 y buenas prácticas del sector.",
      },
    ],
    image: DataAuditImage,
    imageAlt:
      "Análisis y revisión de seguridad de datos en infraestructura digital",
    icon: SecurityIcon,
    iconBg: "bg-brand-1/20",
  },
  {
    id: "implementation",
    title: "Implementación",
    cardDescription: "Despliegue, integración y hardening de infraestructura.",
    pageTitle: "Implementación y despliegue | DevOptions",
    heading: "Tu entorno de producción, convertido en una fortaleza",
    description:
      "Transformamos tu entorno de producción en una fortaleza. Llevamos tu software a la nube mediante despliegues precisos, integraciones fluidas y un proceso de hardening que blinda tu infraestructura desde la raíz contra cualquier ataque.",
    highlightsIntro:
      "De la puesta en marcha al endurecimiento operativo, cada paso está pensado para mantener tu software estable y protegido en producción.",
    highlights: [
      {
        title: "Despliegue en la nube",
        description:
          "Pipelines precisos y entornos reproducibles para llevar tu software a producción con confianza.",
      },
      {
        title: "Integraciones fluidas",
        description:
          "Conexión segura con servicios, APIs y herramientas existentes sin fricción operativa.",
      },
      {
        title: "Hardening de infraestructura",
        description:
          "Endurecimiento desde la raíz: redes, permisos, secretos y configuración alineados a buenas prácticas.",
      },
    ],
    image: ImplementationImage,
    imageAlt: "Infraestructura en la nube y despliegue seguro de aplicaciones",
    icon: ServerIcon,
    iconBg: "bg-brand-1/20",
  },
];

export function getServiceHref(id: string): string {
  return `/services/${id}`;
}
