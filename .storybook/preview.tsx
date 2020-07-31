import { addDecorator } from '@storybook/react';
import './mockNextRouter';
import '~/styles.css';
import React from 'react';

addDecorator((storyFn) => <React.Fragment>{storyFn()}</React.Fragment>);
