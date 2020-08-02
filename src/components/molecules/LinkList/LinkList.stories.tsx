/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React from 'react';
import LinkList from './LinkList';

export default {
    title: `Molecules/LinkList`,
};

const mockData = [
    { text: 'S01E02 - Lawnmower Dog', url: '/episodes/2' },
    { text: 'S01E07 - Raising Gazorpazorp', url: '/episodes/7' },
    { text: 'S01E10 - Close Rick-counters of the Rick Kind', url: '/episodes/10' },
    { text: 'S02E04 - Total Rickall', url: '/episodes/15' },
    { text: 'S02E05 - Get Schwifty', url: '/episodes/16' },
    { text: 'S03E03 - Pickle Rick', url: '/episodes/24' },
    { text: "S03E08 - Morty's Mind Blowers", url: '/episodes/29' },
    { text: "S03E09 - The ABC's of Beth", url: '/episodes/30' },
];

export const Default: React.ReactNode = () => <LinkList title="Episodes" items={mockData} />;
