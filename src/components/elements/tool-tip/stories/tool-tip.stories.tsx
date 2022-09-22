
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToolTip } from '..';


export default {
  title: 'Elements/Tool Tip',
  component:ToolTip,
} as ComponentMeta<typeof ToolTip>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ToolTip> = args => <ToolTip {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    children:<div>
        <p>hover</p>
        <p>over</p>
        <p>this</p>
        <p>section</p>
    </div>,
    tip:'i am tool tip'
};





