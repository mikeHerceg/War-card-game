import { useContext, useState, useEffect, useMemo } from 'react';
import { GameContext, ActionTypes } from '../../contexts/gameContext';
import { getNewCards } from '../../services/getNewCards';
import { GameType } from '../../generic.types';

export const useGame = () => {
  const { state, dispatch } = useContext(GameContext);
  const { gameReady, players, cards, cardsRemaining } = state;

  const p1Name = useMemo(() => state.players.playerOne.name, [state.players.playerOne]);
  const p2Name = useMemo(() => state.players.playerTwo.name, [state.players.playerTwo]);

  const [outCome, setOutcome] = useState<string>();

  const dealCards = async () => {
    const results = await getNewCards({ state });
    console.log(results);
    if (!results) return;
    dispatch({
      payload: { ...state, cards: results.cards, cardsRemaining: results.cardsRemaining },
      type: ActionTypes.UPDATE_DECK,
    });
  };

  const handleWinner = (winner:'player1' | 'player2', warWon = false) => {
    const cardsWon = warWon ? 10 : 2;
    const payload = ():GameType => {
      if (winner === 'player1') {
        setOutcome(`${p1Name} wins`);
        return {
          ...state,
          players: {
            ...state.players,
            playerOne: {
              ...state.players.playerOne,
              wins: state.players.playerOne.wins + cardsWon,
            },
          },
        };
      }
      setOutcome(`${p2Name} wins`);
      return {
        ...state,
        players: {
          ...state.players,
          playerTwo: {
            ...state.players.playerTwo,
            wins: state.players.playerTwo.wins + cardsWon,
          },
        },
      };
    };


    dispatch({
      payload: payload(),
      type: ActionTypes.UPDATE_WINS,
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
    // TODO
    //
    setTimeout(async () => {
      const results = await getNewCards({ state, count: 8 });
      if (!results) return;
      const p1LastCard = results?.cards.pop();
      const p2LastCard = results?.cards.pop();
      dispatch({
        payload: {
          ...state,
          cards: [p1LastCard, p2LastCard],
          cardsRemaining: results.cardsRemaining,
        },
        type: ActionTypes.UPDATE_DECK,
      });
    }, 3000);
  };

  const evaluateWinner = () => {
    if (!cards) return;
    const p1CardValue = cards[0].value;
    const p2CardValue = cards[1].value;
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
  }, [cards]);


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
