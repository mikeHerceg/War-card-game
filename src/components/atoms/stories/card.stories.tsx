
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Card } from '..'

export default {
  title: 'Atoms/Card',
};

// 👇 We create a “template” of how args map to rendering
const CardTemplate: ComponentStory<typeof Card> = args => <Card {...args} />;

// 👇 Each story then reuses that template
export const DefaultCard = CardTemplate.bind({});
DefaultCard.args = {
   children:<><p>hello</p><p>World</p></>
}

