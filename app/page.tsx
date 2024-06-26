import { Card, CardContent } from "@/components/ui/card";
import simplePost from "./lib/interface";
import { client, UrlFor } from "./lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import "./mystyles.css";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'post'] | order(_updatedAt desc) {
      title,
      "currentSlug": slug.current,
      "authorRef": author._ref,
      mainImage,
      "category": categories[0]->title,
      body,
      _createdAt
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
    <div className="max-w-full mx-auto">
      <header className="text-center my-12">
        <h1 className="notes-header lowercase">
          Notes from the Field
        </h1>
        <p className="notes-subheader font-normal lowercase">
          Check out our blog for the latest news & updates from the Uncommon team.
        </p>
      </header>
      <div className="my-container max-w-full flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((post, idx) => (
            <Card key={idx} className="blog-card rounded-lg shadow-lg overflow-hidden relative">
              <Image
                src={UrlFor(post.mainImage).url()}
                alt="Image"
                width={500}
                height={300}
                priority
                className="blog-image object-cover rounded-lg"
              />
              <div className="absolute blog-category">
                {post.category}
              </div>
              <Link href={`/post/${post.currentSlug}`}>
                <CardContent className="p-4 card-content">
                  <h3 className="blog-title font-semibold line-clamp-2 lowercase">
                    {post.title}
                  </h3>
                  <div className="blog-body text-sm text-gray-600 mt-2 line-clamp-3">
                    <PortableText value={post.body} />
                  </div>
                  <p className="blog-date text-gray-500 text-sm mt-2">
                    {new Date(post._createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
