// tslint:disable: variable-name
import * as React from 'react';
import * as xterm from 'xterm';
import { XtermContainer } from './XtermContainer';
import { useTerminal } from '../hooks/use-terminal';

export const Xterm = React.forwardRef((_, ref: React.Ref<xterm.Terminal>) => {
  const terminal = useTerminal();
  React.useImperativeHandle(ref, () => terminal, [terminal]);
  return <XtermContainer terminal={terminal} />;
});

Xterm.displayName = 'Xterm';
