// tslint:disable: variable-name
import * as React from 'react';
import * as xterm from 'xterm';

type Props = {
  instance: xterm.Terminal;
};

export const XtermContainer: React.FC<Props> = (props: Props) => {
  const containerRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    props.instance.open(containerRef.current!);
    return () => props.instance.dispose();
  }, [props.instance]);
  return <div ref={containerRef} />;
};

XtermContainer.displayName = 'XtermContainer';
export default XtermContainer;
