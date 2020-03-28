import * as React from 'react';
import { Terminal, ITerminalOptions } from 'xterm';
import { TerminalContext } from '../contexts/TerminalContext';
import { XtermContainer } from './XtermContainer';

type Props = ITerminalOptions;

export const Xterm: React.FC<Props> = ({ children, ...options }) => {
  const terminal = React.useMemo(() => {
    const terminal = new Terminal(options);
    return terminal;
  }, [options]);
  return React.useMemo(
    () => (
      <TerminalContext.Provider value={terminal}>
        <XtermContainer>{children}</XtermContainer>
      </TerminalContext.Provider>
    ),
    [children, terminal],
  );
};

Xterm.displayName = 'Xterm';
