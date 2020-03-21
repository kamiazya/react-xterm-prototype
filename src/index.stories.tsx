// tslint:disable: variable-name
import * as React from 'react';
import { Xterm } from './index';
import { Terminal } from 'xterm';
export default {
  title: 'Xterm',
};

class FakeTerminal {
  public promptStr = '\r\n$ ';
  constructor(private term: Terminal) {
    term.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
      if (domEvent.keyCode === 13) {
        this.prompt();
      } else if (domEvent.keyCode === 8) {
        // Do not delete the prompt
        if (term.buffer.cursorX > 2) {
          this.term.write('\b \b');
        }
      } else if (printable) {
        term.write(key);
      }
    });
  }

  public run() {
    this.term.writeln('Welcome to react-xterm');
    this.term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    this.term.writeln('Type some keys and commands to play around.');
    this.prompt();
  }

  public prompt(): void {
    this.term.write(this.promptStr);
  }
}

export const Example = () => {
  const termRef = React.createRef<Terminal>();
  React.useEffect(() => {
    const term = new FakeTerminal(termRef.current!);
    term.run();
  });

  return <Xterm ref={termRef} cursorStyle="block" />;
};
