
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CheckboxField } from '../checkbox.component';
import { Fieldset } from '../../../form';
import { FieldsetVariant } from '../../form.types';
export default {
  title: 'Forms/ Checkbox Field',
};

// 👇 We create a “template” of how args map to rendering
const  CheckboxFieldTemplate: ComponentStory<typeof  CheckboxField > = args => < CheckboxField  {...args} />;

// 👇 Each story then reuses that template
export const Default =  CheckboxFieldTemplate.bind({});
Default.args = {
    id:'id',
    label: 'label',
    hasError:false,
    required: true,
    name:"story",
    disabled:false,
    error:'this is an error'
}

export const Stacked = () =>{
    return (
        <Fieldset legendText={'Stacked Fields'} hasError={false} error="error text">
            <CheckboxField
                id={'1'}
                label={'checkbox 1'}
                name="test"
            />
            <CheckboxField
                name="test"
                id={'2'}
                label={'checkbox 2'}
            />
        </Fieldset>
    )
}

export const Inline = () =>{
    return (
        <Fieldset legendText='Inline Fields' variant={FieldsetVariant.Inline} hasError={false} error="error text">
            <CheckboxField
                id={'1'}
                label={'checkbox 1'}
                name="test2"

            />
            <CheckboxField
                id={'2'}
                name="test2"
                label={'checkbox 2'}
            />
        </Fieldset>
    )
}

export const Error = () =>{
    return (
        <Fieldset legendText={'Stacked Fields'} hasError={true} error="error text">
            <CheckboxField
                id={'1'}
                label={'checkbox 1'}
                name="test"
            />
            <CheckboxField
                name="test"
                id={'2'}
                label={'checkbox 2'}
            />
        </Fieldset>
    )
}
