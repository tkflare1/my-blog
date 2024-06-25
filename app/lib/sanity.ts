import { createClient } from "next-sanity";
import  ImageUrlBuilder from "@sanity/image-url";
export const client = createClient ({
    apiVersion: '2022-03-07',
    dataset: 'production',
    projectId: '6cfq6fsv',
    useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function UrlFor(source: any) {
    return builder.image(source);
}