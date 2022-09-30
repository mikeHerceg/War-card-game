import { useContext } from 'react';
import { ActionTypes, GameContext } from '../../contexts/gameContext';

export const useGameSetup = () => {
  const { state, dispatch } = useContext(GameContext);
  const { players, gameReady } = state;

  const saveAndStart = (playerNames:Record<string, unknown>) => {
    console.log(playerNames);
    return dispatch({
      payload: {
        players: {
          ...state.players,
          playerOne: {
            ...state.players.playerOne,
            name: playerNames.pl1 as string,
          },
          playerTwo: {
            ...state.players.playerTwo,
            name: playerNames.pl2 as string,
          },
        },
        gameReady: true,
      },
      type: ActionTypes.START_GAME,
    });
  };
  return {
    players,
    gameReady,
    saveAndStart,
  };

};
