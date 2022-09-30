
import React from 'react';
import styles from './game-setup.module.scss';

import { Card } from '../atoms';
import { FormWrapper } from '../form';
import { FieldTypes } from '../form/form.types';
import { useGameSetup } from './game-setup.hooks';


export function GameSetup({
  ...props
}) {
  const { gameReady, players, saveAndStart } = useGameSetup();

  if (gameReady) return null;

  const fields = [
    {
      label: 'Player 1 Name',
      name: 'pl1',
      id: 'pl1',
      type: FieldTypes.Text,
      required: true,
      defaultValue: players.playerOne.name,
      rules: {
        minLength: 2,
      },
    },
    {
      label: 'Player 2 Name',
      name: 'pl2',
      id: 'pl2',
      type: FieldTypes.Text,
      required: true,
      defaultValue: players.playerTwo.name,
      rules: {
        minLength: 2,
      },
    },

  ];
  return (
    <div {...props} data-testid="game-setup" className={styles['game-setup']}>
      <Card>
        <FormWrapper fields={fields} onSubmit={saveAndStart}/>
      </Card>
      {gameReady.toString()}
    </div>
  );
}

