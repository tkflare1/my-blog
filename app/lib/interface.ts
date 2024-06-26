export default interface simplePost{
    title: string;
    currentSlug: string;
    authorRef: string;
    mainImage: any;
    category: string;
    body: any;
}

export default interface fullPost {
    currentSlug: string;
    title: string;
    body: any;
    mainImage: any;
}