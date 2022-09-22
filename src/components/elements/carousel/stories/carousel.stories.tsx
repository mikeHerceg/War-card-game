
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { Carousel } from '../carousel.component';

    export default {
      title: 'Elements/Carousel',
      component: Carousel,
      argTypes: {},
    } as ComponentMeta<typeof Carousel>;


    const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

    export const Default = Template.bind({});

    Default.args = {
        items:[
            {
                content:'hey 1'
            },
            {

                content:'hey 2'
            },
            {

                content:'hey 3'
            },
            {
                content:'hey 4'
            }
        ]
    };

