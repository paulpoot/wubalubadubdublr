import * as React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { Seo } from '~/types/contentful';
import Meta from '~/src/blocks/meta';

interface Props {
    children: React.ReactNode;
    seo: Seo;
}

const Layout: NextComponentType<NextPageContext, {}, Props> = ({ children, seo }: Props) => {
    return (
        <>
            <Meta seo={seo} />
            {children}
        </>
    );
};

export default Layout;
