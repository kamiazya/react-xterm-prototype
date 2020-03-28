import { ITerminalAddon } from 'xterm';
import { useEffect, useMemo } from 'react';
import { useTerminal } from './use-terminal';

export const useAddon = <T extends ITerminalAddon>(addon: T): T => {
  const memorized = useMemo(() => addon, [addon]);
  const terminal = useTerminal();
  useEffect(() => {
    terminal.loadAddon(memorized);
    return (): void => {
      memorized.dispose();
    };
  }, [terminal, memorized]);
  return memorized;
};
