import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://medjio.me";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/projets"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
