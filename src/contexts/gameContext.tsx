import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  useMemo,
} from 'react';
import { GameType } from '../generic.types';

export enum ActionTypes {
    START_GAME = 'START_GAME',
    UPDATE_PLAYER_CARDS = 'UPDATE_PLAYER_CARDS',
    UPDATE_DECK = 'UPDATE_DECK,',
    UPDATE_WINS = 'UPDATE_WINS,'
}
export type Action = {
    type:ActionTypes
    payload:any
}

export const initialGame = {
  players: {
    playerOne: {
      name: 'Player 1',
      cards: [],
    },
    playerTwo: {
      name: 'Player 2',
      cards: [],
    },
  },
  gameReady: false,
};



export const GameContext = createContext <{
    state: GameType;
    dispatch: React.Dispatch<Action>;
  }>({ state: initialGame, dispatch: () => null });


export const gameReducer = (state:GameType, action:Action) => {
  switch (action.type) {
    case ActionTypes.START_GAME:
      return {
        ...state,
        players: action.payload.players,
        gameReady: action.payload.gameReady,
      };
    case ActionTypes.UPDATE_PLAYER_CARDS:
      return {
        ...state,
        players: {
          ...state.players,
          playerOne: {
            ...state.players.playerOne,
            cards: action.payload.p1cards,
          },
          playerTwo: {
            ...state.players.playerTwo,
            cards: action.payload.p2cards,
          },
        },
      };
    case ActionTypes.UPDATE_DECK:
      return {
        ...state,
        cards: action.payload.cards,
        cardsRemaining: action.payload.cardsRemaining,
      };
    case ActionTypes.UPDATE_WINS:
      return {
        ...state,
        players: action.payload.players,
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
