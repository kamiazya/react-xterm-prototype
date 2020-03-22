// tslint:disable: variable-name
import * as React from 'react';
import { Xterm, useTerminal } from './index';
import { Terminal, ITerminalAddon } from 'xterm';
import { useKeyInput } from './hooks/use-key-input';

export default {
  title: 'Xterm',
};

class MyShellAddon implements ITerminalAddon {
  public promptStr = '\r\n$ ';
  private terminal!: Terminal;

  public activate(terminal: Terminal): void {
    this.terminal = terminal;
  }
  public dispose(): void {}
  public run() {
    this.terminal.writeln('Welcome to react-xterm');
    this.terminal.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    this.terminal.writeln('Type some keys and commands to play around.');
    this.prompt();
  }

  public prompt(): void {
    this.terminal.write(this.promptStr);
  }
}

export const Example = () => {
  const terminal = useTerminal();
  const shell = new MyShellAddon();
  terminal.loadAddon(shell);
  shell.run();

  useKeyInput(({ key, domEvent }) => {
    const printable = !domEvent.altKey && !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
    if (domEvent.keyCode === 13) {
      shell.prompt();
    } else if (domEvent.keyCode === 8) {
      // Do not delete the prompt
      if (terminal.buffer.cursorX > 2) {
        terminal.write('\b \b');
      }
    } else if (printable) {
      terminal.write(key);
    }
  });
  return <Xterm />;
};
