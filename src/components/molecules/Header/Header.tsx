import React from 'react';
import css from './Header.module.css';
import Container from '~/src/components/templates/Container';
import Logo from '~/src/components/atoms/Logo';

export type Props = {};

const Header: React.FunctionComponent<Props> = () => (
    <header className={css.header}>
        <Container className={css.content}>
            <Logo />
        </Container>
    </header>
);

export default Header;
