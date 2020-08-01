import dynamic from 'next/dynamic';

const RichTextComponent = dynamic(import('./Component'));

export const RichText = RichTextComponent;
