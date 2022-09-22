
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SelectField } from '../select.component'
import { FieldTypes } from '../../form.types';
export default {
  title: 'Forms/ Select Field',
};

// 👇 We create a “template” of how args map to rendering
const  SelectFieldTemplate: ComponentStory<typeof  SelectField > = args => < SelectField  {...args} />;

// 👇 Each story then reuses that template
export const Default =  SelectFieldTemplate.bind({});
Default.args = {
    id:'id',
    type: FieldTypes.Select,
    label: 'label',
    name:"story",
    hasError:false,
    required: true,
    disabled:false,
    error:'this is an error',
    options:[
        {
            label:'option 1',
            value:'option-1',
            selected:true
        },
        {
            label:'option 2',
            value:'option-2'
        }
    ]
}

export const Error =  SelectFieldTemplate.bind({});
Error.args = {
    id:'id',
    type: FieldTypes.Select,
    label: 'label',
    name:"story2",
    hasError:true,
    required: true,
    error:'this is an error',
    options:[
        {
            label:'option 1',
            value:'option-1',
        },
        {
            label:'option 2',
            value:'option-2'
        }
    ]
}
