import { Card, CardContent } from "@/components/ui/card";
import simplePost from "./lib/interface";
import { client, UrlFor } from "./lib/sanity";
import Image from "next/image";
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
    <div>
      <header className="text-center my-12" style={{ marginTop: '148px' }}>
        <h1 className="text-3xl font-light uppercase" style={{ width: '632px', height: '90px', color: '#000000', opacity: '1', margin: '0 auto' }}>
          Notes from the Field
        </h1>
        <p className="text-lg mt-4" style={{ width: '835px', height: '30px', color: '#000000', fontFamily: 'Avenir Next', fontSize: '24px', fontWeight: '400', lineHeight: '30px', textAlign: 'center', margin: '0 auto', opacity: '1', marginTop: '120px' }}>
          Check out our blog for the latest news & updates from the Uncommon team.
        </p>
      </header>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" style={{ marginTop: '50px' }}>
          {data.map((post, idx) => (
            <Card key={idx} className="rounded-lg shadow-lg overflow-hidden relative" style={{ width: '414px', height: '500px', padding: '19px 16px 21px 16px', background: '#F6F7F8', borderRadius: '30px 0px 0px 0px' }}>
              <Image
                src={UrlFor(post.mainImage).url()}
                alt="Image"
                width={500}
                height={300}
                className="object-cover"
                style={{ width: '382px', height: '261px', padding: '30px 208px 185px 30px', borderRadius: '30px 0px 0px 0px', background: '#5E5E5E' }}
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full" style={{ padding: '12px 34px', background: '#0747A1', borderRadius: '30px 0px 0px 0px' }}>
                {post.category}
              </div>
              <Link href={`/post/${post.currentSlug}`}>
                <CardContent className="p-4" style={{ paddingTop: '20px' }}>
                  <h3 className="text-xl font-semibold line-clamp-2" style={{ fontFamily: 'Chillax', fontSize: '22px', fontWeight: '600', lineHeight: '30.8px', textAlign: 'left', color: '#000000', width: '356px', height: '62px' }}>
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-600 mt-2 line-clamp-3" style={{ fontFamily: 'Avenir Next', fontSize: '16px', fontWeight: '400', lineHeight: '30px', textAlign: 'left', color: '#000000', width: '382px', height: '60px' }}>
                    <PortableText value={post.body} />
                  </div>
                  <p className="text-gray-500 text-sm mt-2" style={{ fontFamily: 'Avenir Next', fontSize: '16px', fontWeight: '400', lineHeight: '30px', textAlign: 'left', color: '#000000', width: '146px', height: '30px' }}>
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
