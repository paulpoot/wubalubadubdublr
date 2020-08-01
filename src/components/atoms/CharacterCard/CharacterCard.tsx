import React, { FC } from 'react';
import classNames from 'classnames';
import css from './CharacterCard.module.css';
import { CharacterOverviewItem } from '~/types/rmapi/character/overview';

type Props = {
    character: CharacterOverviewItem;
    className?: string;
};

const CharacterCard: FC<Props> = ({ character, className }: Props) => (
    <div className={classNames(css.card, className && className)}>
        <img src={character.image} />
        <div className={css.content}>
            <h3>{character.name}</h3>
        </div>
    </div>
);

export default CharacterCard;
