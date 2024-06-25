import { client, UrlFor } from "@/app/lib/sanity";
import fullPost from "@/app/lib/interface" 
import Image from "next/image";
import { PortableText } from "next-sanity";

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
    *[_type == 'post' && slug.current == '${slug}'] {
  "currentSlug": slug.current,
  title,
  body,
  mainImage
}[0]`;
    
    const data = await client.fetch(query);
    return data;
}
export default async function PostArticle({params}: {params: {slug: string}}) {
    const data: fullPost = await getData(params.slug);
    console.log(data);
    return (
        <div className="mt-8">
            <h1>
              <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Keith-Blog</span>
              <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>  
            </h1>
            <Image src={UrlFor(data.mainImage).url()} width={800} height={800} alt="Imge" priority className="rounded-lg mt-8 border"></Image>
            <div className="mt-16 prose-blue prose-xl prose-invert">
                <PortableText value={data.body} />
            </div>
        </div>
    )
}