
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { Player } from '../player.component';

    export default {
      title: 'Components/Player',
      component: Player,
      argTypes: {},
    } as ComponentMeta<typeof Player>;


    const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  