import { GameType } from '../generic.types';

export async function getCards(
  { deckID, count = 2 } : {deckID:string, count?:number},
) {
  const res = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=${count}`);
  const data = await res.json();
  if (!data.success) return null;

  return {
    cards: data.cards,
    cardsRemaining: data.remaining,
  };

}
