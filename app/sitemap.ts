import { work } from "../constants";

export default async function sitemap() {
  const baseUrl = "https://medjio.me";
  const projets = work.map((projet) => {
    return {
      url: `${baseUrl}/projets/${projet.slug}`,
      lastModified: new Date(),
    };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: new Date(),
    },
    ...projets,
  ];
}
