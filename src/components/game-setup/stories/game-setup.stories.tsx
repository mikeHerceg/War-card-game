
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { GameSetup } from '../game-setup.component';

    export default {
      title: 'Components/Gamesetup',
      component: GameSetup,
      argTypes: {},
    } as ComponentMeta<typeof GameSetup>;


    const Template: ComponentStory<typeof GameSetup> = (args) => <GameSetup {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  