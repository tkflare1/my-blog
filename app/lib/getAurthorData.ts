// lib/getAuthorData.ts
import { client } from "@/app/lib/sanity";

export async function getAuthorData() {
  const query = `
    *[_type == 'author'] | order(_updatedAt desc) {
      name,
      image,
      bio
    }`;

  try {
    const data = await client.fetch(query);
    console.log('Sanity Author Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching author data from Sanity:', error);
    return [];
  }
}
