import { Document } from '@contentful/rich-text-types';

export type ContentRow = {
    title: string;
    contentPositioning: ContentRowPositioning;
    background: ContentRowBackground;
    content: Document;
};

export enum ContentRowPositioning {
    Left = 'left',
    Center = 'center',
    Right = 'right',
}

export enum ContentRowBackground {
    White = 'white',
    Grey = 'grey',
}
