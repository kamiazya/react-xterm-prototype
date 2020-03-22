// tslint:disable: variable-name
import * as React from 'react';
import * as xterm from 'xterm';
import { useTerminal } from '../hooks/use-terminal';

export const Xterm = React.forwardRef((_, ref: React.Ref<xterm.Terminal>) => {
  const terminal = useTerminal();
  React.useImperativeHandle(ref, () => terminal, [terminal]);
  const divRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    terminal.open(divRef.current!);
    return () => {
      terminal.dispose();
    };
  }, [terminal]);
  return <div ref={divRef} />;
});

Xterm.displayName = 'Xterm';
