import { Card, CardContent } from "@/components/ui/card";
import simplePost from "./lib/interface";
import { client, UrlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PortableText } from "next-sanity";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'post'] | order(_updatedAt desc) {
      title,
      "currentSlug": slug.current,
      "authorRef": author._ref,
      mainImage,
      "category": categories[0]->title,
      body
    }`;

  try {
    const data = await client.fetch(query);
    console.log('Sanity Response:', data);

    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}


export default async function Home() {
  const data: simplePost[] = await getData();
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-12">
        <h1 className="text-5xl font-bold">Notes from the Field</h1>
        <p className="text-lg mt-4">Check out our blog for the latest news & updates from the Uncommon team.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((post, idx) => (
          <Card key={idx} className="rounded-lg shadow-lg overflow-hidden relative">
            <Image
              src={UrlFor(post.mainImage).url()}
              alt="Image"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full">
              {post.category}
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
              <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                <PortableText value={post.body} />
              </div>
              <Button asChild className="w-full mt-4">
                <Link href={`/post/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
