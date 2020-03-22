import React, { FC } from 'react';
import { Xterm, useTerminal } from 'react-xterm-prototype';
import { MyShellAddon } from './MyShellAddon';

// tslint:disable-next-line: variable-name
const App: FC = () => {
  const term = useTerminal();
  const shell = new MyShellAddon();
  term.loadAddon(shell);
  shell.run();
  return <Xterm />;
};

export default App;
