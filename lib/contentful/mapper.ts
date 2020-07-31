import { Page, Seo } from '~/types/contentful';

export const mapSeo = (page: Page): Seo => ({
    ...page,
    openGraphImage: page.openGraphImage?.fields.file.url,
});
