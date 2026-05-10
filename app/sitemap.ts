import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/event-staffing",
    "/services/event-staffing/serving-staff",
    "/services/event-staffing/hostess",
    "/services/valet-parking",
    "/portfolio",
    "/blog",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
