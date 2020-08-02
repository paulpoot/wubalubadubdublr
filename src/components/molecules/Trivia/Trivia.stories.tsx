/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React from 'react';
import Trivia from './Trivia';
import { RichText } from '~/src/blocks/rich-text/index';
import { Document } from '@contentful/rich-text-types';

export default {
    title: `Molecules/Trivia`,
};

const mockDoc = {
    nodeType: 'document',
    data: {},
    content: [
        {
            nodeType: 'paragraph',
            content: [
                {
                    nodeType: 'text',
                    value:
                        "First, they take the dinglebop and they smooth it out with a bunch of schleem.\nThe schleem is then punched out and repurposed for later batches. They \ntake the dinglebop and they push it through the grumbo, where the fleeb \nis rubbed against it. It's important that the fleeb is rubbed, because \nthe fleeb has all of the fleeb juice. Then a Schlameeh shows up, and he \nrubs it, and spits on it. They cut the fleeb. There are several hizzards\n in the way. The blamphs rub against the chumbles, and the klubus and \ngrumbo are shaved away. That leaves you with a regular old plumbus!",
                    marks: [],
                    data: {},
                },
            ],
            data: {},
        },
        {
            nodeType: 'paragraph',
            content: [
                {
                    nodeType: 'text',
                    value: 'This is a sponsored fact. Buy your own plumbus made of the finest dinglebop ',
                    marks: [],
                    data: {},
                },
                {
                    nodeType: 'hyperlink',
                    content: [{ nodeType: 'text', value: 'here', marks: [], data: {} }],
                    data: { uri: 'https://www.amazon.com/RICK-AND-MORTY-RM-1012-Plumbus/dp/B07P97VMVR' },
                },
                { nodeType: 'text', value: '.', marks: [], data: {} },
            ],
            data: {},
        },
    ],
};

export const Default: React.ReactNode = () => (
    <Trivia titlePrefix="Did you know..." factTitle="how a plumbus is made?">
        <RichText document={mockDoc as Document} />
    </Trivia>
);
