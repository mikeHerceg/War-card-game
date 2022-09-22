
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../icon.component';
import {Icons} from '../icon.types';

export default {
    title: 'Atoms/Icon',
    component: Icon,
    argTypes: {
        icon:{
            control:{type:'select'},
            options:Icons
        }
    },
} as ComponentMeta<typeof Icon>;


const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
    icon:Icons.Instagram
};

