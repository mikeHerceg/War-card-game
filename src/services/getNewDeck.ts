import { ActionTypes, Action } from '../contexts/gameContext';
import { GameType, Card } from '../generic.types';
import { getCards } from './getCards';

export async function getNewDeck(
  { state, dispatch } : {state:GameType, dispatch:React.Dispatch<Action>},
) {
  const res = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await res.json();
  if (!data.success) return;

  const deck = await getCards({ deckID: data.deck_id, count: 52 });

  if (!deck) return;
  const { cards } = deck;
  const p1cards:Card[] = [];
  const p2cards:Card[] = [];
  cards.forEach((card:any, index:number) => {
    if (index % 2) {
      p1cards.push(card);
      return;
    }
    p2cards.push(card);
  });
  console.log({ p1cards, p2cards });
  dispatch({
    payload: { p1cards, p2cards },
    type: ActionTypes.UPDATE_PLAYER_CARDS,
  });
}
