import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  useMemo,
} from 'react';
import { GameType } from '../generic.types';

export enum ActionTypes {
    START_GAME = 'START_GAME',
    UPDATE_PLAYERS ='UPDATE_PLAYERS',
    UPDATE_GAME_READY ='UPDATE_GAME_READY'
}
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

type Action = {
    type:ActionTypes
    payload:GameType
}

export const GameContext = createContext <{
    state: GameType;
    dispatch: React.Dispatch<Action>;
  }>({ state: initialGame, dispatch: () => null });




export const gameReducer = (state:GameType, action:Action) => {
  switch (action.type) {
    case 'START_GAME':
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

export function GameProvider(props: PropsWithChildren<Record<string, unknown>>) {
  const [state, dispatch] = useReducer(gameReducer, initialGame);

  const gameContextValues = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <GameContext.Provider value={gameContextValues}>
      {props.children}
    </GameContext.Provider>
  );
}
