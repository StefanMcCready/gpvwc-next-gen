import React from 'react';

import { Button } from '../components/core';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'select' }
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args}>Standard Button</Button>;

export const Standard = Template.bind({});

Standard.args = {
  theme: 'dark'
};
