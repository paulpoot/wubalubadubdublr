import React from 'react';
import css from './CharacterPassport.module.css';
import { CharacterSingle } from '~/types/rmapi/character/single';

export type Props = {
    character: CharacterSingle;
    statusLabel: string;
    speciesLabel: string;
    typeLabel: string;
    genderLabel: string;
    originLabel: string;
    locationLabel: string;
};

const CharacterPassport: React.FunctionComponent<Props> = ({
    character,
    statusLabel,
    speciesLabel,
    typeLabel,
    genderLabel,
    originLabel,
    locationLabel,
}: Props) => (
    <div className={css.characterPassport}>
        <div className={css.portrait}>
            <img src={character.image} />
            <h1>{character.name}</h1>
        </div>
        <div className={css.details}>
            <dl className={css.dataList}>
                <dt>{statusLabel}</dt>
                <dd>{character.status}</dd>
                <dt>{speciesLabel}</dt>
                <dd>{character.species}</dd>
                {character.type && (
                    <>
                        <dt>{typeLabel}</dt>
                        <dd>{character.type}</dd>
                    </>
                )}
                <dt>{genderLabel}</dt>
                <dd>{character.gender}</dd>
                <dt>{originLabel}</dt>
                <dd>
                    {character.origin.name}, {character.origin.dimension}
                </dd>
                <dt>{locationLabel}</dt>
                <dd>
                    {character.location.name}, {character.location.dimension}
                </dd>
            </dl>
        </div>
    </div>
);

export default CharacterPassport;
