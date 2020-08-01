import { Page, Seo } from '~/types/contentful';
import { Microcopy, RawMicrocopy } from '~/types/contentful/microcopy';

export const mapSeo = (page: Page): Seo => ({
    ...page,
    openGraphImage: page.openGraphImage,
});

export const mapMicrocopy = (rawMicrocopy: RawMicrocopy[]): Microcopy =>
    rawMicrocopy.reduce((map: Microcopy, obj: RawMicrocopy) => ((map[obj.fields.key] = obj.fields.value), map), {});
