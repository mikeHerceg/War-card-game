// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';

import { Carousel } from './carousel.component';

describe('Carousel', () => {

const mockItems = [
    {
        content:'hey 1'
    },
    {

        content:'hey 2'
    },
    {

        content:'hey 3'
    },
    {
        content:'hey 4'
    }
]

  const renderComponent = () => render(<Carousel items={mockItems} />);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('carousel');
    expect(component).toBeDefined();
  });
});

