import { ActionTypes, Action } from '../contexts/gameContext';
import { GameType } from '../generic.types';


export async function getNewDeck(
  { state, dispatch } : {state:GameType, dispatch:React.Dispatch<Action>},
) {
  const res = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await res.json();
  if (!data.success) return;
  dispatch({
    payload: { ...state, deckID: data.deck_id },
    type: ActionTypes.UPDATE_DECK_ID,
  });
  console.log(data);
  // set deck ID in context
}
