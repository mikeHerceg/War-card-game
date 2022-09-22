
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TypeTag } from '..';
import { Tags } from '../../../generic.types';

export default {
  title: 'Atoms/Type Tag',
  argTypes: {
    tag: {
      options: Tags,
      control: { type: 'select' },
    },
  },
};

// 👇 We create a “template” of how args map to rendering
const TypeTagTemplate: ComponentStory<typeof TypeTag> = args => <TypeTag {...args} />;

// 👇 Each story then reuses that template
export const DefaultTypeTag = TypeTagTemplate.bind({});
DefaultTypeTag.args = {
   tag: Tags.h1,
   content: 'Heading'
}

