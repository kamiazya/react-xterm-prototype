// tslint:disable: variable-name
import * as React from 'react';
import * as xterm from 'xterm';
import { render } from 'ink';
import { useTerminal } from '../hooks/use-terminal';
import { InkContext, InkStdin, InkStdout } from '../addons/ink';

export const Xterm = React.forwardRef(({ children }, ref: React.Ref<xterm.Terminal>) => {
  const terminal = useTerminal();
  React.useImperativeHandle(ref, () => terminal, [terminal]);
  const divRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    terminal.open(divRef.current!);
    return () => {
      terminal.dispose();
    };
  }, [terminal]);

  const hasChildren = React.useMemo(() => !!children, [children]);
  const stdin = React.useMemo(() => new InkStdin(), [terminal]);
  const stdout = React.useMemo(() => {
    const stdout = new InkStdout();
    stdout.terminal = terminal;
    return stdout;
  }, [terminal]);
  React.useEffect(() => {
    if (hasChildren) {
      render(
        <InkContext.Provider
          value={{
            stdin,
            stdout,
          }}
        >
          {children}
        </InkContext.Provider>,
      );
    }
  }, [hasChildren]);
  return <div ref={divRef} />;
});

Xterm.displayName = 'Xterm';
