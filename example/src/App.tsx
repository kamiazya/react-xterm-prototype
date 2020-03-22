import React, { FC } from 'react';
import { Xterm, useTerminal, useKeyInput } from 'react-xterm-prototype';
import { MyShellAddon } from './MyShellAddon';

// tslint:disable-next-line: variable-name
const App: FC = () => {
  const terminal = useTerminal();
  const shell = new MyShellAddon();
  terminal.loadAddon(shell);
  shell.run();
  useKeyInput(({ key, domEvent }) => {
    const printable = !domEvent.altKey && !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
    if (domEvent.keyCode === 13) {
      shell.prompt();
    } else if (domEvent.keyCode === 8) {
      // Do not delete the prompt
      if (terminal.buffer.cursorX > 2) {
        terminal.write('\b \b');
      }
    } else if (printable) {
      terminal.write(key);
    }
  });
  return <Xterm />;
};

export default App;
