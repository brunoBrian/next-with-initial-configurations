import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Title, { TitleProps } from './';

export default {
  title: 'Title',
  component: Title,
  args: {
    text: 'Hello world',
  },
} as Meta;

export const Primary: Story<TitleProps> = (args) => <Title {...args} />;
