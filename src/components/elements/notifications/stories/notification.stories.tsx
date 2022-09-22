
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from '..';
import { Notifications } from '../notification.types'

export default {
  title: 'Elements/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Notification> = args => <Notification {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    text:"Default Notification",
    type: Notifications.Info
};





