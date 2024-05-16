import { createClient, groq } from "next-sanity";

import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.SANITY_SECRET_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_SECRET_TOKEN,
});

export async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type=='post']{
        _id,
          title,
          "slug":slug.current,
          "image":mainImage.asset->url,
        publishedAt,
          "body":pt::text(body),
          "author":*[_type=="author"&& _id==^.author._ref][0]{
          _id,
            name,
            "slug":slug.current
          },
        categories[]->{
          _id,
          name
        },
          "content":body
      }
      `);
  return posts;
}

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
