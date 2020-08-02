import React from 'react';
import css from './Footer.module.css';
import Container from '~/src/components/templates/Container';
import Logo from '~/src/components/atoms/Logo';

export type Props = {};

const Footer: React.FunctionComponent<Props> = () => (
    <footer className={css.footer}>
        <Container className={css.content}>
            <Logo />

            <span>
                An <a href="https://www.youtube.com/watch?v=jVy0JWX5XEY">app</a> by Paul Poot
            </span>
        </Container>
    </footer>
);

export default Footer;
