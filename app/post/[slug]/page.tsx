
import { PortableText } from "next-sanity";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import fullPost from "@/app/lib/interface";
import { client, UrlFor } from "@/app/lib/sanity";

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
      *[_type == 'post' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        body,
        mainImage
      }[0]`;
    
      try {
        const data = await client.fetch(query);
        console.log('Sanity Response:', data);
        return data;
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        throw error;
      }
  }
  
  export default async function PostArticle({ params }: { params: { slug: string } }) {
    const data: fullPost = await getData(params.slug);
    console.log(data);
  
    return (
      <div>
        <Header />
        <div className="mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1>
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Uncommon Blog</span>
            <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
          </h1>
          <Image
            src={UrlFor(data.mainImage).url()}
            width={800}
            height={800}
            alt="Image"
            priority
            className="rounded-lg mt-8 border"
          />
          <div className="mt-16 prose-blue prose-xl">
            <PortableText value={data.body} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }