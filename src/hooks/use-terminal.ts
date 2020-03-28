import { useContext } from 'react';
import { Terminal } from 'xterm';
import { TerminalContext } from '../contexts/TerminalContext';

export const useTerminal = (): Terminal => useContext(TerminalContext);
