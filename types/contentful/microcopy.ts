import { Entry } from 'contentful';

export type Microcopy = Record<string, string>;

export type RawMicrocopy = Entry<{
    key: string;
    value: string;
}>;
