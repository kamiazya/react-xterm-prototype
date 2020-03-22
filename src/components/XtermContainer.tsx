// tslint:disable: variable-name
import * as React from 'react';
import * as xterm from 'xterm';

type Props = {
  terminal: xterm.Terminal;
};

export const XtermContainer: React.FC<Props> = ({ terminal }) => {
  const divRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    terminal.open(divRef.current!);
    return () => terminal.dispose();
  }, [terminal]);
  return <div ref={divRef} />;
};

XtermContainer.displayName = 'XtermContainer';
