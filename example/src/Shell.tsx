// tslint:disable: variable-name
import React, { FC, useEffect } from 'react';
import { useTerminal, useKeyEvent, useAddon } from 'react-xterm-prototype';
import { ShellAddon } from './ShellAddon';

export const Shell: FC = ({ children }) => {
  const terminal = useTerminal();
  const shell = useAddon(new ShellAddon());
  useEffect(() => {
    shell.run();
  }, []);

  useKeyEvent(({ key, domEvent }) => {
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
  return <>{children}</>;
};
