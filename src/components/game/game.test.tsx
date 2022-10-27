// Generated with util/create-component.js

import React from 'react';
// import { renderWithContext, MockContext } from '../../test-helpers';
// eslint-disable-next-line
import { render } from '@testing-library/react';
import { Game } from './game.component';

describe('Game', () => {


  it('should render when gameReady is true', () => {
    // Arrange
    const renderComponent = render(<Game/>);
    // renderWithContext(<Game/>, { ...MockContext, gameReady: true });

    // Act
    const { getByTestId } = renderComponent;
    // Assert
    const component = getByTestId('game');
    expect(component).toBeDefined();
  });
});

