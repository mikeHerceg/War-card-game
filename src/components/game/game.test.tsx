// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';

import { Game } from './game.component';

describe('Game', () => {


  const renderComponent = () => render(<Game/>);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('game');
    expect(component).toBeDefined();
  });
});

