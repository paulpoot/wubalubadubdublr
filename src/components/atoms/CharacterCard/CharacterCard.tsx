import React, { FC } from 'react';
import classNames from 'classnames';
import css from './CharacterCard.module.css';
import { CharacterOverviewItem } from '~/types/rmapi/character/overview';
import Link from 'next/link';

type Props = {
    character: CharacterOverviewItem;
    className?: string;
};

const CharacterCard: FC<Props> = ({ character, className }: Props) => (
    <div className={classNames(css.card, className && className)}>
        <Link href={`/characters/${character.id}`}>
            <a>
                <img className={css.portrait} src={character.image} />
                <div className={css.content}>
                    <h3>{character.name}</h3>
                </div>
            </a>
        </Link>
    </div>
);

export default CharacterCard;
