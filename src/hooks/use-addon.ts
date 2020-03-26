import { ITerminalAddon } from 'xterm';
import { useTerminal } from './use-terminal';
import { useEffect, useMemo } from 'react';

export const useAddon = <T extends ITerminalAddon>(addon: T) => {
  const memorized = useMemo(() => addon, [addon]);
  const terminal = useTerminal();
  useEffect(() => {
    terminal.loadAddon(memorized);
    return () => {
      memorized.dispose();
    };
  }, [terminal, memorized]);
  return memorized;
};
