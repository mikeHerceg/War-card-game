
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { PlayingCard } from '../playing-card.component';

    export default {
      title: 'Components/Playing Card',
      component: PlayingCard,
      argTypes: {},
    } as ComponentMeta<typeof PlayingCard>;


    const Template: ComponentStory<typeof PlayingCard> = (args) => <PlayingCard {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  