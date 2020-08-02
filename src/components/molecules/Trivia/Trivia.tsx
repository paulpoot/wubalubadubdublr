import React, { ReactNode } from 'react';
import css from './Trivia.module.css';

export type Props = {
    titlePrefix: string;
    factTitle: string;
    children?: ReactNode;
};

const Trivia: React.FunctionComponent<Props> = ({ titlePrefix, factTitle, children }: Props) => (
    <div className={css.trivia}>
        <h3>
            {titlePrefix} {factTitle}
        </h3>
        {children}
    </div>
);

export default Trivia;
