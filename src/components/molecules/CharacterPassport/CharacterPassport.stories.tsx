/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React from 'react';
import CharacterPassport from './CharacterPassport';

export default {
    title: `Molecules/CharacterPassport`,
};

const mockData = {
    name: 'Michael Jackson',
    status: 'Alive',
    species: 'Humanoid',
    type: 'Phone-Person',
    gender: 'Male',
    origin: { id: '72', name: 'Earth (Phone Dimension)', dimension: 'Phone Dimension' },
    location: { id: '72', name: 'Earth (Phone Dimension)', dimension: 'Phone Dimension' },
    image: 'https://rickandmortyapi.com/api/character/avatar/404.jpeg',
    episode: [{ id: '8', name: 'Rixty Minutes', episode: 'S01E08' }],
};

export const Default: React.ReactNode = () => (
    <CharacterPassport
        character={mockData}
        genderLabel="Gender"
        locationLabel="Location"
        originLabel="Origin"
        speciesLabel="Species"
        statusLabel="Status"
        typeLabel="Type"
    />
);
