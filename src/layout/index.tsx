import React from 'react';
import { Page } from '~/types/contentful';
import Layout from '~/src/components/templates/Layout';
import Header from '~/src/components/molecules/Header';
import { mapSeo } from '~/lib/contentful/mapper';

export type Props = {
    children: React.ReactNode;
    pageProps: {
        page: Page;
        errorCode?: 404;
    };
};

const DefaultLayout = ({ children, pageProps: { page, errorCode } }: Props): JSX.Element =>
    errorCode ? (
        <>{children}</>
    ) : (
        <Layout seo={mapSeo(page)}>
            <Header></Header>
            {children}
        </Layout>
    );

export default DefaultLayout;
