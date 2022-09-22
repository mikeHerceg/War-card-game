import { GameProvider } from '../contexts/gameContext';
import { GameSetup } from '../components/game-setup';
import { Game } from '../components/game';

export function Home({ ...props }) {

  return (
    <div {...props}>
      <GameProvider>
        <GameSetup/>
        <Game/>
      </GameProvider>
    </div>
  );
}
