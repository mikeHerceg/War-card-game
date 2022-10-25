import React, { useReducer, useMemo } from 'react';
// eslint-disable-next-line
import { render } from '@testing-library/react';
import { GameContext, gameReducer } from '../contexts/gameContext';
import { GameType } from '../generic.types';


export const renderWithContext = (component:any, context:GameType) => {


  const [state, dispatch] = useReducer(gameReducer, context);

  const gameContextValues = useMemo(() => ({ state, dispatch }), [state]);
  return render(
    <GameContext.Provider value={gameContextValues}>
      {component}
    </GameContext.Provider>,
  );
};


export const MockContext = {
  players: {
    playerOne: {
      name: 'Player 1',
      wins: 0,
      loses: 0,
    },
    playerTwo: {
      name: 'Player 2',
      wins: 0,
      loses: 0,
    },
  },
  gameReady: false,
};
