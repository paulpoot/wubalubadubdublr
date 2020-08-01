import React from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
    document: Document;
    renderLinkAsButton?: boolean;
};

const defaultOptions = {
    renderNode: {},
};

const RichText = ({ document }: Props): JSX.Element => <>{documentToReactComponents(document, defaultOptions)}</>;

export default RichText;
