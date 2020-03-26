// tslint:disable: variable-name
import React, { FC, useMemo, useEffect } from 'react';
import { useTerminal, useKeyEvent } from 'react-xterm-prototype';
import { ShellAddon } from './ShellAddon';

const useShell = () => {
  const terminal = useTerminal();
  const shell = useMemo(() => new ShellAddon(), []);
  useEffect(() => {
    terminal.loadAddon(shell);
    shell.run();
    return () => {
      shell.dispose();
    };
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
};

export const ShellApp: FC = ({ children }) => {
  useShell();
  return <>{children}</>;
};
