// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { ReactSlider } from '@ui-libraries/react-slider';
import BlueLock from '../assets/blue_look.webp';
import OnePiece from '../assets/one_piece.webp';
import Ippo from '../assets/ippo_image.webp';
export function App() {
  const movieList = [
    {
      title: 'Movie Title',
      imageUrl: BlueLock
    },
    {
      imageUrl: OnePiece,
      title: 'Movie Title',
    },
    {
      imageUrl: Ippo,
      title: 'Movie Title',
    }

  ]
  return (
    <div>
      {/* <NxWelcome title="demo" /> */}
      <ReactSlider list={movieList}>
        
      </ReactSlider>
    </div>
  );
}

export default App;
