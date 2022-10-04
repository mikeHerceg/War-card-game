import { ActionTypes, Action } from '../contexts/gameContext';
import { GameType } from '../generic.types';

export async function getNewCards(
  { state, dispatch, count = 2 } : {state:GameType, dispatch:React.Dispatch<Action>, count?:number},
) {
  const { deckID } = state;
  if (!deckID) return;
  const res = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=${count}`);
  const data = await res.json();
  if (!data.success) return;

  dispatch({
    payload: { ...state, cards: data.cards, cardsRemaining: data.remaining },
    type: ActionTypes.UPDATE_DECK,
  });
}
