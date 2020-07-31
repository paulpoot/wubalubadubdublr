import React, { PropsWithChildren } from 'react';
import { AppProps } from 'next/app';
import '~/styles.css';
import { NextPage } from 'next';
import { Page } from '~/types/contentful';
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/lib/apolloClient'

export type WubNextPage<P> = NextPage<P> & {
    Layout: React.FunctionComponent<{
        children: React.ReactNode;
        pageProps: {
            data: Page;
        };
    }>;
};

type WubAppProps = AppProps & {
    Component: WubNextPage<{}>;
};

const Noop = ({ children }: PropsWithChildren<{}>): React.ReactNode => children;

const App = ({ Component, pageProps }: WubAppProps): JSX.Element => {
    const Layout = Component.Layout || Noop;
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Layout pageProps={pageProps}>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
};

export default App;
