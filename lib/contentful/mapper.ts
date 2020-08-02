import { Page, Seo, RawPage } from '~/types/contentful';
import { Microcopy, RawMicrocopy } from '~/types/contentful/microcopy';

export const mapMicrocopy = (rawMicrocopy: RawMicrocopy[]): Microcopy =>
    rawMicrocopy.reduce((map: Microcopy, obj: RawMicrocopy) => ((map[obj.fields.key] = obj.fields.value), map), {});

export const mapPage = (page: RawPage): Page =>
    // stringify and then parsing removes null values from the object and prevents Next serialization issue
    JSON.parse(
        JSON.stringify({
            ...page,
            microcopy: mapMicrocopy(page.microcopy),
            trivia: page.trivia?.fields || null,
        }),
    );

export const mapSeo = (page: Page): Seo => ({
    ...page,
    openGraphImage: page.openGraphImage,
});
