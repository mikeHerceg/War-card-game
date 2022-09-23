import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  useMemo,
} from 'react';
import { GameType } from '../generic.types';

const initialGame = {
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

export const GameContext = createContext <{
    state: GameType;
    dispatch: React.Dispatch<any>;
  }>({ state: initialGame, dispatch: () => null });



type Action = {
    type:'CREATE_PRODUCT'|'UPDATE_PLAYERS'|'UPDATE_GAME_READY',
    payload:GameType
}

export const gameReducer = (state:GameType, action:Action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT':
      return {
        ...state,
        players: action.payload.players,
        gameReady: action.payload.gameReady,
      };
    case 'UPDATE_PLAYERS':
      return {
        ...state,
        players: action.payload.players,
      };
    case 'UPDATE_GAME_READY':
      return {
        ...state,
        gameReady: action.payload.gameReady,
      };
    default:
      return state;
  }
};

export function GameProvider(props: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(gameReducer, initialGame);

  const gameContextValues = useMemo(() => ({ state, dispatch }), []);

  return (
    <GameContext.Provider value={gameContextValues}>
      {props.children}
    </GameContext.Provider>
  );
}
