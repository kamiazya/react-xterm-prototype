import React, { FC } from 'react';
import { Xterm, useTerminal } from 'react-xterm-prototype';
import { FakeShell } from './FakeShell';

// tslint:disable-next-line: variable-name
const App: FC = () => {
  const terminal = useTerminal();
  const shell = new FakeShell(terminal);
  shell.run();
  return <Xterm />;
};

export default App;
