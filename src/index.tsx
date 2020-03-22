// tslint:disable: variable-name
import * as React from 'react';
import * as xterm from 'xterm';

type Props = {
  options?: xterm.ITerminalOptions;
};

export const Xterm = React.forwardRef((props: Props, ref: React.Ref<xterm.Terminal>) => {
  const term = React.useMemo(() => new xterm.Terminal(props.options), [props.options]);
  const containerRef = React.createRef<HTMLDivElement>();
  React.useImperativeHandle(ref, () => term, [term]);
  React.useEffect(() => {
    term.open(containerRef.current!);
    return () => term.dispose();
  });
  return <div ref={containerRef} />;
});

Xterm.displayName = 'Xterm';
export default Xterm;
