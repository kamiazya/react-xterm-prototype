// tslint:disable: variable-name
import * as React from 'react';
import { Terminal, ITerminalOptions } from 'xterm';
import 'xterm/css/xterm.css';

export const Xterm = React.forwardRef((options: ITerminalOptions, ref: React.Ref<Terminal>) => {
  const containerRef = React.createRef<HTMLDivElement>();
  const term = new Terminal(options);
  React.useImperativeHandle(ref, () => term);
  React.useEffect(() => {
    term.open(containerRef.current!);
    return () => term.dispose();
  });
  return <div ref={containerRef} />;
});
