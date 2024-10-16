// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { ReactSlider } from '@ui-libraries/react-slider';

export function App() {
  return (
    <div>
      <NxWelcome title="demo" />
      <ReactSlider />
    </div>
  );
}

export default App;
