import { useContext, useState, useEffect, useMemo } from 'react';
import { GameContext, ActionTypes } from '../../contexts/gameContext';
import { GameType, Card } from '../../generic.types';

export const useGame = () => {
  const { state, dispatch } = useContext(GameContext);
  const { gameReady, players, cards, cardsRemaining } = state;

  const p1Name = useMemo(() => state.players.playerOne.name, [state.players.playerOne]);
  const p2Name = useMemo(() => state.players.playerTwo.name, [state.players.playerTwo]);

  const [outCome, setOutcome] = useState<string>();
  const [p1TopCard, setP1TopCard] = useState<Card>();
  const [p2TopCard, setP2TopCard] = useState<Card>();
  const [warCards, setWarCards] = useState<Card[]>([]);


  const dealCards = () => {
    // todo
    setP1TopCard(state.players.playerOne.cards.pop());
    setP2TopCard(state.players.playerTwo.cards.pop());

  };

  const handleWinner = (winner:'player1' | 'player2') => {
    if (warCards.length > 0) {
      const payload = () => {
        if (winner === 'player1') {
          setOutcome(`${p1Name} wins`);
          return {
            p1cards: [...state.players.playerOne.cards, ...warCards],
            p2cards: [...state.players.playerTwo.cards],
          };
        }
        setOutcome(`${p2Name} wins`);
        return {
          p1cards: [...state.players.playerOne.cards],
          p2cards: [...state.players.playerTwo.cards, ...warCards],
        };
      };
      dispatch({
        payload: payload(),
        type: ActionTypes.UPDATE_PLAYER_CARDS,
      });
      setWarCards([]);
      return;
    }
    const payload = () => {
      if (winner === 'player1') {
        setOutcome(`${p1Name} wins`);
        return {
          p1cards: [...state.players.playerOne.cards, p1TopCard, p2TopCard],
          p2cards: [...state.players.playerTwo.cards],
        };
      }
      setOutcome(`${p2Name} wins`);
      return {
        p1cards: [...state.players.playerOne.cards],
        p2cards: [...state.players.playerTwo.cards, p1TopCard, p2TopCard],
      };
    };
    dispatch({
      payload: payload(),
      type: ActionTypes.UPDATE_PLAYER_CARDS,
    });

  };

  const evaluateFaces = ({ p1CardValue, p2CardValue }:{p1CardValue:string, p2CardValue:string}) => {
    // order of ifs matter
    if (p1CardValue === 'ACE') {
      return handleWinner('player1');
    }
    if (p2CardValue === 'ACE') {
      return handleWinner('player2');
    }
    if (p1CardValue === 'KING') {
      return handleWinner('player1');
    }
    if (p2CardValue === 'KING') {
      return handleWinner('player2');
    }
    if (p1CardValue === 'QUEEN') {
      return handleWinner('player1');
    }
    if (p2CardValue === 'QUEEN') {
      return handleWinner('player2');
    }
    if (p1CardValue === 'JACK') {
      return handleWinner('player1');
    }
    if (p2CardValue === 'JACK') {
      return handleWinner('player2');
    }
    return null;
  };

  const declareWar = () => {
    setOutcome('WAR');

    setTimeout(() => {
      const p1Cards = state.players.playerOne.cards;
      const p2Cards = state.players.playerTwo.cards;

      const p1WarCards = p1Cards.splice(p1Cards.length - 4);
      const p2WarCards = p2Cards.splice(p2Cards.length - 4);

      setWarCards([...p1WarCards, ...p2WarCards]);
      setP1TopCard(p1WarCards.pop());
      setP2TopCard(p2WarCards.pop());

    }, 2000);
  };

  const evaluateWinner = () => {
    if (!p1TopCard || !p2TopCard) return;
    const p1CardValue = p1TopCard.value;
    const p2CardValue = p2TopCard.value;
    const faces = ['ACE', 'JACK', 'KING', 'QUEEN'];

    if (p1CardValue === p2CardValue) {
      declareWar();
      return;
    }
    // check faces
    const hasFaceValue = (value:string) => faces.includes(value);
    if (hasFaceValue(p1CardValue) || hasFaceValue(p2CardValue)) {
      evaluateFaces({ p1CardValue, p2CardValue });
      return;
    }

    // check values
    if (+p1CardValue > +p2CardValue) {
      handleWinner('player1');
      return;
    }

    handleWinner('player2');
  };

  useEffect(() => {
    evaluateWinner();
  }, [p1TopCard, p2TopCard]);


  return {
    state,
    players,
    gameReady,
    outCome,
    cards: [p1TopCard, p2TopCard],
    cardsRemaining,
    dealCards,
  };
};
