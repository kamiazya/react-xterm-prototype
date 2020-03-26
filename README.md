# react-xterm-prototype

WIP

## Install

```bash
# npm
npm install --save react-xterm-prototype
# yarn
yan add react-xterm-prototype
```

## Usage

### index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'xterm/css/xterm.css';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### App.tsx

```tsx
import React, { FC } from 'react';
import Xterm from 'react-xterm-prototype';
import { ShellApp } from './ShellApp';

const App: FC = () => (
  <main>
    <Xterm cursorStyle="block">
      <Shell />
    </Xterm>
  </main>
);

export default App;
```

### Shell.tsx

```tsx
import React, { FC, useEffect } from 'react';
import { useTerminal, useKeyEvent, useAddon } from 'react-xterm-prototype';
import { ShellAddon } from './ShellAddon';

export const Shell: FC = ({ children }) => {
  const terminal = useTerminal();
  const shell = useAddon(new ShellAddon());
  useEffect(() => {
    shell.run();
  }, []);

  useKeyEvent(({ key, domEvent }) => {
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
  return <>{children}</>;
};
```

### ShellAddon.ts

```ts
import { Terminal, ITerminalAddon } from 'xterm';
export class ShellAddon implements ITerminalAddon {
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
```

## License

MIT © [kamiazya](https://github.com/kamiazya)
