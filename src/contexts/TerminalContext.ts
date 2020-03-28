import { createContext, Context } from 'react';
import { Terminal } from 'xterm';

export const TerminalContext: Context<Terminal> = createContext(new Terminal());
TerminalContext.displayName = 'TerminalContext';
