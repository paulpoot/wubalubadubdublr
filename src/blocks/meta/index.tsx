import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { Seo } from '~/types/contentful';

type Props = {
    seo: Seo;
};

const Meta: FunctionComponent<Props> = ({ seo }: Props) => {
    return (
        <Head>
            <title>{seo.title}</title>

            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            <meta name="description" content={seo.seoDescription} />
            <meta property="og:locale" content="en-US" />

            <meta property="og:type" content={'website'} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.seoDescription} />
            {seo.openGraphImage && <meta property="og:image" content={`${seo.openGraphImage}?w=1200&h=1200`} />}
            <meta property="og:site_name" content={'wubalubadubdublr'} />

            <meta name="robots" content={seo.robots} />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
            <meta name="application-name" content="wubalubadubdublr" />
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        </Head>
    );
};

export default Meta;
