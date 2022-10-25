// Generated with util/create-component.js

import React from 'react';
import { renderWithContext, MockContext } from '../../test-helpers';
import { Game } from './game.component';

describe('Game', () => {


  const renderComponent = renderWithContext(<Game/>, MockContext);
  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent;

    // Assert
    const component = getByTestId('game');
    expect(component).toBeDefined();
  });
});

