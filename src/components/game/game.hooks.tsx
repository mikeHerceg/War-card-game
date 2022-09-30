import { useContext } from 'react';
import { GameContext } from '../../contexts/gameContext';

export const useGame = () => {
  const { state, dispatch } = useContext(GameContext);
  const { gameReady, players, deckID } = state;
  const dealCards = () =>
    // make request to api
    null;
  return {
    players,
    gameReady,
    dealCards,
    deckID,
  };
};
