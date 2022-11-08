// Generated with util/create-component.js

import React from 'react';
import { render } from '@testing-library/react';

import { Player } from './player.component';

describe('Player', () => {


  const renderComponent = () => render(<Player name="player name" cardsInHand={1}/>);

  it('should render correctly', () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId('player');
    expect(component).toBeDefined();
  });
});

