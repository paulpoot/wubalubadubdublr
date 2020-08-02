import React from 'react';
import { Page } from '~/types/contentful';
import Layout from '~/src/components/templates/Layout';
import Header from '~/src/components/molecules/Header';
import { mapSeo } from '~/lib/contentful/mapper';
import Footer from '~/src/components/molecules/Footer';

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
            <Header />
            {children}
            <Footer />
        </Layout>
    );

export default DefaultLayout;
