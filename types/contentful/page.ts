import { Document } from '@contentful/rich-text-types';
import { Microcopy, RawMicrocopy } from './microcopy';

export type Page = Seo & {
    content: Document;
    microcopy: Microcopy;
};

export type RawPage = Seo & {
    content: Document;
    microcopy: RawMicrocopy[];
};

export type Seo = {
    title: string;
    seoDescription: string;
    openGraphImage: string;
    robots: string;
    slug: string;
};
