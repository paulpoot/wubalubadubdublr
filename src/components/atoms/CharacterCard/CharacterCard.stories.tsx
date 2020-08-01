import React, { FC } from 'react';

import { withKnobs } from '@storybook/addon-knobs';

import CharacterCardComponent from './CharacterCard';

export default {
    title: 'Atoms/Card',
    decorators: [withKnobs],
};

const mock = {
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
};

export const CharacterCard: FC = () => <CharacterCardComponent character={mock}></CharacterCardComponent>;
