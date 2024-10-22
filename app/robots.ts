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

// User-agent: ia_archiver

// Sitemap: https://medjio.me/sitemap.xml
