/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React from 'react';
import CharacterGrid from './CharacterGrid';

export default {
    title: `Molecules/CharacterGrid`,
};

const mockData = [
    { id: '41', name: 'Big Boobed Waitress', image: 'https://rickandmortyapi.com/api/character/avatar/41.jpeg' },
    { id: '193', name: 'King Jellybean', image: 'https://rickandmortyapi.com/api/character/avatar/193.jpeg' },
    { id: '238', name: 'Mr. Booby Buyer', image: 'https://rickandmortyapi.com/api/character/avatar/238.jpeg' },
    { id: '333', name: 'Stair Goblin', image: 'https://rickandmortyapi.com/api/character/avatar/333.jpeg' },
];

export const Default: React.ReactNode = () => (
    <CharacterGrid characters={mockData} noCharactersFound="No characters found" />
);
