/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';
import css from './Button.stories.module.css';

export default {
    title: 'Atoms/Button',
    decorators: [withKnobs],
};

export const Default: React.ReactNode = () => (
    <div className={css.container}>
        <Button text={text('Text', 'Click me!')} url="" />
    </div>
);
