import { useTerminal } from './use-terminal';
import { useCallback, useEffect } from 'react';

type Handler = (event: { key: string; domEvent: KeyboardEvent }) => any;

export const useKeyInput = (callback: Handler) => {
  const terminal = useTerminal();
  const handler = useCallback(event => callback(event), [callback]);
  useEffect(() => {
    const onKeyHandler = terminal.onKey(handler);
    return () => {
      onKeyHandler.dispose();
    };
  }, [handler]);
};
