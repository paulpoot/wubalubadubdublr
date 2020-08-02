import React from 'react';
import css from './CharacterGrid.module.css';
import { CharacterOverviewItem } from '~/types/rmapi/character/overview';
import CharacterCard from '../../atoms/CharacterCard';

export type Props = {
    characters: CharacterOverviewItem[];
    noCharactersFound: string;
};

const CharacterGrid: React.FunctionComponent<Props> = ({ characters, noCharactersFound }: Props) => (
    <div className={css.characterGrid}>
        {characters && characters[0].name ? (
            characters.map((character, key) => <CharacterCard className={css.item} character={character} key={key} />)
        ) : (
            <p>{noCharactersFound}</p>
        )}
    </div>
);

export default CharacterGrid;
