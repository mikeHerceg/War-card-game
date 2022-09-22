
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from '..';

export default {
  title: 'Elements/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Breadcrumbs> = args => <Breadcrumbs {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    crumbs:[
        {
            link:'/',
            title:'Home',
        },
        {
            link:'/about',
            title:'About',
        },
        {
            title:'Components',
        }
    ]
};





