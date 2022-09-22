
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '..';

export default {
  title: 'Buttons / Action Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    text: 'Button',
    onClick:()=>alert('hey'),
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: 'Disabled',
    disabled:true,
    onClick:()=>alert('hey'),
};

export const WithIcon = Template.bind({});

WithIcon.args = {
    children:<>  With Icon
    <svg className="btn__arrow" viewBox="0 0 407.437 407.437" role="presentation" aria-hidden="true">
        <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
    </svg></>
};





