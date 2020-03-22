import { useContext } from 'react';
import { TerminalContext } from '../contexts/TerminalContext';
import { Terminal } from 'xterm';

export const useTerminal = (): Terminal => useContext(TerminalContext);
