import { useContext } from 'react';
import { TerminalContext } from '../components/TerminalContext';
import { Terminal } from 'xterm';

export const useTerminal = (): Terminal => useContext(TerminalContext);
