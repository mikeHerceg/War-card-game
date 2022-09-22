module.exports = (kebabCaseName, paschalCaseName, titleCase) => ({
    content: `
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { ${paschalCaseName} } from '../${kebabCaseName}.component';

    export default {
      title: 'Components/${titleCase}',
      component: ${paschalCaseName},
      argTypes: {},
    } as ComponentMeta<typeof ${paschalCaseName}>;


    const Template: ComponentStory<typeof ${paschalCaseName}> = (args) => <${paschalCaseName} {...args} />;

    export const Default = Template.bind({});

    Default.args = {

    };

  `,
    extension: `.stories.tsx`,
  });
