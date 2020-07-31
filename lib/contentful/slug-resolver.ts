import { getEntryCollection } from './index';
import { Page } from '~/types/contentful';

export const resolveBySlug = async (slug: string): Promise<Page> => {
    const entries = await getEntryCollection<Page>('page', {
        limit: 1,
        'fields.slug': slug,
    });

    if (entries.items.length === 0) {
        throw new Error(`Page not found ${slug}`);
    }

    return entries.items[0].fields;
};
