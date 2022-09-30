
import React from 'react';
import styles from './game-setup.module.scss';
import { Card, TypeTag } from '../atoms';
import { FormWrapper } from '../form';
import { FieldTypes } from '../form/form.types';
import { useGameSetup } from './game-setup.hooks';
import { Tags } from '../../generic.types';

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
        <TypeTag tag={Tags.h2} content={<>Welcome to <strong>WAR</strong></>} />
        <TypeTag tag={Tags.p} content="Enter player names to start playing" />
        <FormWrapper fields={fields} onSubmit={saveAndStart}/>
      </Card>
    </div>
  );
}

