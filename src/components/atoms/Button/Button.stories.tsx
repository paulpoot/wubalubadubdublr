/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Atoms/Button',
    decorators: [withKnobs],
};

export const Default: React.ReactNode = () => <Button text={text('Text', 'Click me!')} url="" />;
