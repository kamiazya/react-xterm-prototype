// tslint:disable: variable-name
/**
 * @class ExampleComponent
 */

import * as React from 'react';
import { Terminal } from 'xterm';
// import 'xterm/css/xterm.css';

// import styles from './styles.css';

const TerminalContext = React.createContext(new Terminal());
const useTerminal = (): Terminal => React.useContext(TerminalContext);
// type TerminalState = {
//   isFocused: boolean;
// };
// const TerminalStateContext = React.createContext<TerminalState>({
//   isFocused: false,
// });
// const useTerminalState = () => React.useContext(TerminalStateContext);

// export type Props = { text: string };

// tslint:disable-next-line: variable-name
export const Xterm: React.FC = () => {
  const containerRef = React.useRef(null);
  // const state = useTerminalState();
  const term = useTerminal();
  // term.on('focus', () => (state.isFocused = true));
  // term.on('blur', () => (state.isFocused = false));
  React.useEffect(() => {
    term.open(containerRef.current!);
    // return () => {
    //   // clean up function
    //   term.destroy();
    // };
  });
  return <div ref={containerRef} />;
};
