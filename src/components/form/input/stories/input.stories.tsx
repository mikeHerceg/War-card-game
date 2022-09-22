
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { InputField } from '../input.component'
import { FieldTypes } from '../../form.types';
export default {
  title: 'Forms/ Input Field',
};

// 👇 We create a “template” of how args map to rendering
const  InputFieldTemplate: ComponentStory<typeof  InputField > = args => < InputField  {...args} />;

// 👇 Each story then reuses that template
export const Default =  InputFieldTemplate.bind({});
Default.args = {
    id:'id',
    type: FieldTypes.Text,
    label: 'label',
    name:"story",
    hasError:false,
    required: true,
    disabled:false,
    error:'this is an error'
}

export const Error =  InputFieldTemplate.bind({});
Error.args = {
    id:'id',
    type: FieldTypes.Text,
    label: 'label',
    name:"story2",
    hasError:true,
    required: true,
    error:'this is an error'
}
