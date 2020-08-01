import React from 'react';
import css from './CharacterGrid.module.css';
import { CharacterOverviewItem } from '~/types/rmapi/character/overview';
import CharacterCard from '../../atoms/CharacterCard';

export type Props = {
    characters: CharacterOverviewItem[];
};

const CharacterGrid: React.FunctionComponent<Props> = ({ characters }: Props) => (
    <div className={css.characterGrid}>
        {characters &&
            characters.map((character, key) => <CharacterCard className={css.item} character={character} key={key} />)}
    </div>
);

export default CharacterGrid;
