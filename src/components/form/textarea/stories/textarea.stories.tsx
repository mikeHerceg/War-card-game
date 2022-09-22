
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TextareaField } from '../textarea.component'
import { FieldTypes } from '../../form.types';

export default {
  title: 'Forms/ Textarea Field',
};

// 👇 We create a “template” of how args map to rendering
const  TextareaFieldTemplate: ComponentStory<typeof  TextareaField > = args => < TextareaField  {...args} />;

// 👇 Each story then reuses that template
export const Default =  TextareaFieldTemplate.bind({});
Default.args = {
    id:'id',
    type: FieldTypes.Textarea,
    label: 'label',
    name:"story",
    hasError:false,
    required: true,
    disabled:false,
    error:'this is an error'
}

export const Error =  TextareaFieldTemplate.bind({});
Error.args = {
    id:'id',
    type: FieldTypes.Textarea,
    label: 'label',
    name:"story2",
    hasError:true,
    required: true,
    error:'this is an error'
}
