
import React from 'react';
import { ComponentStory } from '@storybook/react';
import { Link} from '..'

export default {
  title: 'Atoms/Link',
};

// 👇 We create a “template” of how args map to rendering
const LinkTemplate: ComponentStory<typeof Link> = args => <Link {...args} />;

// 👇 Each story then reuses that template
export const DefaultLink = LinkTemplate.bind({});
DefaultLink.args = {
    href:"#",
    text:"link",
    newTab:false
}

