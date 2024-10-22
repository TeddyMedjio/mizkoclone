export default function sitemap() {
  return [
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://acme.com/projets",
      lastModified: new Date(),
      changeFrequency: "montly",
      priority: 0.8,
    },
  ];
}
