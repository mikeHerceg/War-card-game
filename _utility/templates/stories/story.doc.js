module.exports = (kebabCaseName, paschalCaseName, titleCase) => ({
    content: `import { Canvas, Meta, Story, ArgsTable } from '@storybook/addon-docs';

import { ${paschalCaseName} } from '../${kebabCaseName}.component';

<Meta title="Components/${titleCase}" component={${paschalCaseName}} />

# ${titleCase}

<ArgsTable of={${paschalCaseName}} />

<Canvas>
    <Story id="components-${kebabCaseName}--default"/>
</Canvas>
  `,
    extension: `.docs.mdx`,
  });
