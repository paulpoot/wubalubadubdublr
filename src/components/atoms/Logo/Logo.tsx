import React from 'react';
import css from './Logo.module.css';
import Link from 'next/link';

const Logo: React.FunctionComponent = () => (
    <Link href="/">
        <a className={css.logo}>
            wubalubadubdub<span className={css.accented}>lr</span>
        </a>
    </Link>
);

export default Logo;
