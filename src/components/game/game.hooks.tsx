import { useContext, useState, useEffect, useMemo } from 'react';
import { GameContext, ActionTypes } from '../../contexts/gameContext';
import { getNewCards } from '../../services/getNewCards';


export const useGame = () => {
  const { state, dispatch } = useContext(GameContext);
  const { gameReady, players, cards, cardsRemaining } = state;

  const p1Name = useMemo(() => state.players.playerOne.name, [state.players.playerOne]);
  const p2Name = useMemo(() => state.players.playerTwo.name, [state.players.playerTwo]);

  const [outCome, setOutcome] = useState<string>();

  const evaluateFaces = ({ p1CardValue, p2CardValue }:{p1CardValue:string, p2CardValue:string}) => {
    // order of ifs matter
    if (p1CardValue === 'ACE') {
      setOutcome(`${p1Name} wins`);
    }
    if (p2CardValue === 'ACE') {
      setOutcome(`${p2Name} wins`);
    }
    if (p1CardValue === 'KING') {
      setOutcome(`${p1Name} wins`);
    }
    if (p2CardValue === 'KING') {
      setOutcome(`${p2Name} wins`);
    }
    if (p1CardValue === 'Queen') {
      setOutcome(`${p1Name} wins`);
    }
    if (p2CardValue === 'Queen') {
      setOutcome(`${p2Name} wins`);
    }
    if (p1CardValue === 'JACK') {
      setOutcome(`${p1Name} wins`);
    }
    if (p2CardValue === 'JACK') {
      setOutcome(`${p2Name} wins`);

    }

  };

  const declareWar = () => {
    setOutcome('WAR');
    // TODO
  };

  const evaluateWinner = () => {
    if (!cards) return;
    const p1CardValue = cards[0].value;
    const p2CardValue = cards[1].value;
    const faces = ['ACE', 'JACK', 'KING', 'QUEEN'];

    if (p1CardValue === p2CardValue) {
      declareWar();
    }

    // check faces
    const hasFaceValue = (value:string) => faces.includes(value);
    if (hasFaceValue(p1CardValue) || hasFaceValue(p2CardValue)) {
      evaluateFaces({ p1CardValue, p2CardValue });
      return;
    }

    // check values
    if (+p1CardValue > +p2CardValue) {
      setOutcome(`${p1Name} wins`);
      return;
    }
    setOutcome(`${p2Name} wins`);
  };

  const dealCards = async () => {
    const results = await getNewCards({ state });
    console.log(results);
    if (!results) return;
    dispatch({
      payload: { ...state, cards: results.cards, cardsRemaining: results.cardsRemaining },
      type: ActionTypes.UPDATE_DECK,
    });
  };

  useEffect(() => {
    evaluateWinner();
  }, [cards, cardsRemaining]);


  return {
    state,
    players,
    gameReady,
    outCome,
    cards,
    cardsRemaining,
    dealCards,
  };
};
