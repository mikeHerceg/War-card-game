
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkedButton } from '..';

export default {
  title: 'Buttons/Linked Button',
  component:LinkedButton ,
} as ComponentMeta<typeof LinkedButton >;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LinkedButton > = args => <LinkedButton  {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    text: 'Linked Button',
    href:"/",
    disabled:false,
    newTab:false
};
