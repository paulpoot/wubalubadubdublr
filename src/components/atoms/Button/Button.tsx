import React from 'react';
import css from './Button.module.css';
import Link from 'next/link';
import classnames from 'classnames';

export type Props = {
    text: string;
    url: string;
    className?: string;
};

const Button: React.FunctionComponent<Props> = ({ text, url, className }: Props) => {
    if (url.match(/(https:\/\/)/)) {
        return (
            <a className={classnames(css.button, className)} href={url}>
                {text}
            </a>
        );
    } else {
        return (
            <Link href={url}>
                <a className={classnames(css.button, className)}>{text}</a>
            </Link>
        );
    }
};

export default Button;
