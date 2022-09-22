
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '..';

export default {
  title: 'Elements/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    panels: [
        {
        heading: "Test Heading",
        content: <>
            lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl
        </>
        },
        {
        heading: "Test Heading II",
        content: <p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>
        },
        {
        heading: "Test Heading III",
        content: <p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>
        }
    ]
};

export const WithDefaultSelected = Template.bind({});


WithDefaultSelected.args = {
    panels: [
        {
        heading: "Test Heading",
        content: <p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>,
        isDefault:true,
        },
        {
        heading: "Test Heading II",
        content: <p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>
        },
        {
        heading: "Test Heading III",
        content: <p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>
        }
    ]
};




