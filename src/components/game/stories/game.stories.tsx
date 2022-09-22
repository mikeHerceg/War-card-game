
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { Game } from '../game.component';

    export default {
      title: 'Components/Game',
      component: Game,
      argTypes: {},
    } as ComponentMeta<typeof Game>;


    const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  