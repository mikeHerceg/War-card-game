
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RadioField } from '../radio.component'
import { Fieldset } from '../../../form';
import { FieldsetVariant } from '../../form.types';

export default {
  title: 'Forms/ Radio Field',
};

// 👇 We create a “template” of how args map to rendering
const  RadioFieldTemplate: ComponentStory<typeof  RadioField > = args => < RadioField  {...args} />;

// 👇 Each story then reuses that template
export const Default =  RadioFieldTemplate.bind({});
Default.args = {
    id:'id',
    label: 'label',
    hasError:false,
    name:"story",
    required: true,
    disabled:false,
    error:'this is an error'
}

export const Stacked = () =>{
    return (
        <Fieldset legendText={'Stacked Fields'}  hasError={false} error="error text">
            <RadioField
                id={'1'}
                label={'checkbox 1'}
                name="test1"

            />
            <RadioField
                id={'2'}
                label={'checkbox 2'}
                name="test1"

            />
        </Fieldset>
    )
}

export const Inline = () =>{
    return (
        <Fieldset legendText='Inline Fields' variant={FieldsetVariant.Inline}>
            <RadioField
                id={'1'}
                label={'checkbox 1'}
                name="test"
            />
            <RadioField
                id={'2'}
                label={'checkbox 2'}
                name="test"
            />
        </Fieldset>
    )
}

export const Error = () =>{
    return (
        <Fieldset legendText={'Stacked Fields'}  hasError={true} error="error text">
            <RadioField
                id={'1'}
                label={'checkbox 1'}
                name="test1"

            />
            <RadioField
                id={'2'}
                label={'checkbox 2'}
                name="test1"

            />
        </Fieldset>
    )
}
