
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Error } from '..'

export default {
  title: 'Atoms/Error',
};

// 👇 We create a “template” of how args map to rendering
const ErrorTemplate: ComponentStory<typeof Error> = args => <Error {...args} />;

// 👇 Each story then reuses that template
export const DefaultError = ErrorTemplate.bind({});
DefaultError.args = {
   text:"I'm an error"
}

