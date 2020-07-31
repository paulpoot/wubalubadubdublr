import React from 'react';
import css from './Header.module.css';
import Container from '~/src/components/templates/Container';

export type Props = {};

const Header: React.FunctionComponent<Props> = () => {
    return (
        <header className={css.header}>
            <Container className={css.content}>
                <span>wubalubadubdublr</span>
            </Container>
        </header>
    );
};

export default Header;
