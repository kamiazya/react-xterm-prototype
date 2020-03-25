// tslint:disable: variable-name
import { FC, useMemo, useEffect } from 'react';
import { useTerminal, useKeyInput } from 'react-xterm-prototype';
import { MyShellAddon } from './MyShellAddon';

const useShellApp = () => {
  const terminal = useTerminal();
  const shell = useMemo(() => new MyShellAddon(), []);
  useEffect(() => {
    terminal.loadAddon(shell);
    shell.run();
  }, []);

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
};

export const MyShellApp: FC = () => {
  useShellApp();
  return null;
};
