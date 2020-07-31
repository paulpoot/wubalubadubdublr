import { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export type Page = Seo & {
    title: string;
    seoDescription: string;
    openGraphImage: Asset;
    robots: string;
    slug: string;
    content: Document;
};

export type Seo = {
    title: string;
    seoDescription: string;
    openGraphImage: string;
    robots: string;
    slug: string;
};
