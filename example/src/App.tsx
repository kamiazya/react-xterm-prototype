import React, { FC } from 'react';
import Xterm from 'react-xterm-prototype';
import { Shell } from './Shell';

const App: FC = () => (
  <main>
    <Xterm cursorStyle="block">
      <Shell />
    </Xterm>
  </main>
);

export default App;
