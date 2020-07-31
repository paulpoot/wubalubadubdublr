/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React from 'react';
import Container from './Container';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Templates/Layout',
    decorators: [withKnobs],
};

export const Layout = (): React.ReactNode => (
    <Container>
        <h1>Container content</h1>
    </Container>
);
