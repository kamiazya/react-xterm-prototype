import * as React from 'react';
import { Terminal, ITerminalOptions } from 'xterm';
import { TerminalContext } from '../contexts/TerminalContext';
import { XtermContainer } from './XtermContainer';

type Props = {
  onTerminal?: (terminal: Terminal) => void;
} & ITerminalOptions;

export const Xterm: React.FC<Props> = ({ children, onTerminal, ...options }) => {
  const terminal = React.useMemo(() => {
    const terminal = new Terminal(options);
    if (onTerminal) onTerminal(terminal);
    return terminal;
  }, [onTerminal, options]);
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
