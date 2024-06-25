import { Card, CardContent } from "@/components/ui/card";
import simplePost from "./lib/interface";
import { client, UrlFor } from "./lib/sanity";
import Image from "next/image"
import { Button } from "@/components/ui/button";
import Link from "next/link";
async function getData() {
  const query = `
  *[_type == 'post'] | order(_updatedAt desc) {
  title,
  "currentSlug": slug.current,
  "authorRef": author._ref,
  mainImage
}`
const data = await client.fetch(query);
return data;
}

async function Home() {
  const data: simplePost[] = await getData();
  console.log(data);
  return (
<div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
    {data.map((post, idx) => (
      <Card key={idx}>
        <Image src={UrlFor(post.mainImage).url()} alt="Image" width={500} height={500}
        className="rounded-t-lg h-[200px] object-cover" />
        <CardContent className="mt-5">
          <h3 className="text-lg line-clamp-2">{post.title}</h3>
          <Button asChild className="w-full mt-7">
            <Link href={`/post/${post.currentSlug}`}>Read More</Link>
          </Button>
        </CardContent>
      </Card>
    ))}
</div>
  );
}

export default Home