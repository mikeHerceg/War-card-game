import { GameType } from '../generic.types';

export async function getNewCards(
  { state, count = 2 } : {state:GameType, count?:number},
) {
  const { deckID } = state;
  if (!deckID) return null;
  const res = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=${count}`);
  const data = await res.json();
  if (!data.success) return null;

  return {
    cards: data.cards,
    cardsRemaining: data.remaining,
  };

}
