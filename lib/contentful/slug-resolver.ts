import { getEntryCollection } from './index';
import { RawPage, Page } from '~/types/contentful';
import { mapPage } from './mapper';

export const resolveBySlug = async (slug: string): Promise<Page> => {
    const entries = await getEntryCollection<RawPage>('page', {
        limit: 1,
        'fields.slug': slug,
    });

    if (entries.items.length === 0) {
        throw new Error(`Page not found ${slug}`);
    }

    return mapPage(entries.items[0].fields);
};
