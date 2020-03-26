import { useEffect, useMemo } from 'react';
import { useTerminal } from './use-terminal';
import { Terminal, IEvent } from 'xterm';

export function createTerminalEventHook<T, U>(event: (terminal: Terminal) => IEvent<T, U>) {
  return function useEvent(listener: (arg1: T, arg2: U) => any) {
    const terminal = useTerminal();
    const on = useMemo(() => event(terminal), []);
    useEffect(() => {
      const disposable = on(listener);
      return () => {
        disposable.dispose();
      };
    }, []);
  };
}

export const useBinaryEvent = createTerminalEventHook(t => t.onBinary);
export const useCursorMoveEvent = createTerminalEventHook(t => t.onCursorMove);
export const useDataEvent = createTerminalEventHook(t => t.onData);
export const useKeyEvent = createTerminalEventHook(t => t.onKey);
export const useLineFeedEvent = createTerminalEventHook(t => t.onLineFeed);
export const useRenderEvent = createTerminalEventHook(t => t.onRender);
export const useResizeEvent = createTerminalEventHook(t => t.onResize);
export const useScrollEvent = createTerminalEventHook(t => t.onScroll);
export const useSelectionChangeEvent = createTerminalEventHook(t => t.onSelectionChange);
export const useTitleChangeEvent = createTerminalEventHook(t => t.onTitleChange);
