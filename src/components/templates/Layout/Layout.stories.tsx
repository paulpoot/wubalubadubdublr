/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react';
import BaseLayout from './Layout';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Templates/Layout',
    decorators: [withKnobs],
};

export const Layout = (): React.ReactNode => (
    <BaseLayout
        seo={{
            title: '',
            seoDescription: '',
            openGraphImage: '',
            robots: '',
            slug: '',
        }}
    >
        <h1>This is a test page</h1>
    </BaseLayout>
);
