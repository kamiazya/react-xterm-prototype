// tslint:disable: variable-name
import * as React from 'react';
import * as xterm from 'xterm';
import { XtermContainer } from './XtermContainer';

type Props = {
  options?: xterm.ITerminalOptions;
};

export const Xterm = React.forwardRef((props: Props, ref: React.Ref<xterm.Terminal>) => {
  const term = React.useMemo(() => new xterm.Terminal(props.options), [props.options]);
  React.useImperativeHandle(ref, () => term, [term]);
  return <XtermContainer instance={term} />;
});

Xterm.displayName = 'Xterm';
export default Xterm;
