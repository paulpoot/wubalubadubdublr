import * as React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import css from './Container.module.css';
import classNames from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Container: NextComponentType<NextPageContext, {}, Props> = ({ children, className }: Props) => (
    <div className={classNames(css.container, className)}>{children}</div>
);

export default Container;
