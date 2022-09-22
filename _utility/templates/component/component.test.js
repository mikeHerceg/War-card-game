module.exports = (kebabCaseName, paschalCaseName) => ({
  content: `// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';

import { ${paschalCaseName} } from './${kebabCaseName}.component';

describe('${paschalCaseName}', () => {


  const renderComponent = () => render(<${paschalCaseName}/>);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('${kebabCaseName}');
    expect(component).toBeDefined();
  });
});

`,
  extension: '.test.tsx',
});
