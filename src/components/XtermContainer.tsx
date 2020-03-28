import * as React from 'react';
import { useTerminal } from '../hooks/use-terminal';

export const XtermContainer: React.FC = ({ children }) => {
  const terminal = useTerminal();
  const divRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    if (divRef.current) {
      terminal.open(divRef.current);
    }
    return (): void => {
      terminal.dispose();
    };
  }, [divRef, terminal]);
  return <div ref={divRef}>{children}</div>;
};

XtermContainer.displayName = 'XtermContainer';
