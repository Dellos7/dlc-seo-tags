export interface MetaTag{
    name?: string;
    property?: string;
    content: string;
}

export interface LinkTag{
    rel: string;
    href: string;
}

export interface SeoTagsData{
    title: string;
    meta?: MetaTag[];
    links?: LinkTag[];
}