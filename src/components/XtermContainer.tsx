// tslint:disable: variable-name
import * as React from 'react';
import { useTerminal } from '../hooks/use-terminal';

export const XtermContainer: React.FC = ({ children }) => {
  const terminal = useTerminal();
  const divRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    terminal.open(divRef.current!);
    return () => {
      terminal.dispose();
    };
  }, [terminal]);
  return <div ref={divRef}>{children}</div>;
};

XtermContainer.displayName = 'XtermContainer';
