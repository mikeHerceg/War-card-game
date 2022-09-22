
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButton } from '..';

export default {
  title: 'Buttons / Toggle Buttons',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ToggleButton> = args => <ToggleButton {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    text: 'Button',
    defaultValue:false,
    name:'story'
};






