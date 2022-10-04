import { useContext } from 'react';
import { GameContext } from '../../contexts/gameContext';
import { getNewCards } from '../../services/getNewCards';

export const useGame = () => {
  const { state, dispatch } = useContext(GameContext);
  const { gameReady, players } = state;
  const dealCards = () => {
    getNewCards({ state, dispatch });
  };

  return {
    state,
    players,
    gameReady,
    dealCards,

  };
};
