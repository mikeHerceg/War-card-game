// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';

import { GameSetup } from './game-setup.component';

describe('GameSetup', () => {


  const renderComponent = () => render(<GameSetup/>);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('game-setup');
    expect(component).toBeDefined();
  });
});

