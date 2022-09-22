
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { FormWrapper } from '../..'
import { FieldTypes, FieldsetVariant } from '../../form.types';

export default {
  title: 'Forms/Form Wrapper',
};

// 👇 We create a “template” of how args map to rendering
const FormWrapperTemplate: ComponentStory<typeof FormWrapper> = args => <FormWrapper {...args} />;

// 👇 Each story then reuses that template
export const DefaultFormWrapper = () => {



    const fields = [
        {
            label:'first name',
            name:'name',
            id:'input',
            type:FieldTypes.Text,
            required: true,
        },
        {
            label:'last name',
            name:'name2',
            id:'input2',
            type:FieldTypes.Text,
            rules:{
                maxLength:2,
                matcher:/^[a-zA-Z0-9_]*$/
            },
        },
        {
            label:'Do you like Toast',
            variant:FieldsetVariant.Inline,
            name:'preferToast',
            id:'1',
            type:FieldTypes.Radio,
            options:[
                {
                    label:'yes',
                    value:'yes'
                },
                {
                    label:'no',
                    value:'no'
                },
            ]
        },
    ]



    return (
        <FormWrapper fields={fields} />
    )};

