// Generated with util/create-component.js

import React from 'react';
import { renderWithContext, MockContext } from '../../test-helpers';
import { Game } from './game.component';

describe('Game', () => {


  it('should render when gameReady is true', () => {
    // Arrange
    const renderComponent = renderWithContext(<Game/>, { ...MockContext, gameReady: true });

    // Act
    const { getByTestId } = renderComponent;
    // Assert
    const component = getByTestId('game');
    expect(component).toBeDefined();
  });
});

