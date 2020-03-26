// tslint:disable: variable-name
import React, { FC, useEffect } from 'react';
import { useKeyEvent, useAddon } from 'react-xterm-prototype';
import { ShellAddon } from './ShellAddon';

export const Shell: FC = ({ children }) => {
  const shell = useAddon(new ShellAddon());
  useEffect(() => {
    shell.run();
  }, []);

  useKeyEvent(({ key, domEvent }) => {
    const printable = !domEvent.altKey && !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
    if (domEvent.keyCode === 13) {
      // Press enter
      shell.prompt();
    } else if (domEvent.keyCode === 8) {
      // Press delete
      if (shell.deletable) {
        // Do not delete the prompt
        shell.delete();
      }
    } else if (printable) {
      shell.write(key);
    }
  });
  return <>{children}</>;
};
