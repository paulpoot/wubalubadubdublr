import { Document } from '@contentful/rich-text-types';
import { Microcopy, RawMicrocopy } from './microcopy';
import { Trivia } from './trivia';
import { Entry } from 'contentful';

export type Page = Seo & {
    content: Document;
    microcopy: Microcopy;
    trivia?: Trivia;
};

export type RawPage = Seo & {
    content: Document;
    microcopy: RawMicrocopy[];
    trivia?: Entry<Trivia>;
};

export type Seo = {
    title: string;
    seoDescription: string;
    openGraphImage: string;
    robots: string;
    slug: string;
};
