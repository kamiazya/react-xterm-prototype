import * as React from 'react';
import { Terminal } from 'xterm';

export class InkStdin extends EventTarget {
  public setEncoding(encoding?: string): this;
  public setEncoding(): this {
    return this;
  }

  public isRaw: boolean;
  public setRawMode(mode: boolean): this {
    this.isRaw = mode;
    return this;
  }
  public isTTY = true; // Without this, setRawMode will throw

  public resume(): this {
    return this;
  }

  public pause(): this {
    return this;
  }
}

export class InkStdout {
  public terminal: Terminal;

  public columns: number = 100;
  write(buffer: Uint8Array | string, cb?: (err?: Error) => void): boolean;
  write(str: Uint8Array | string, encoding?: string, cb?: (err?: Error) => void): boolean;
  public write(buffer: Uint8Array | string, cb?: any): boolean {
    this.terminal.write(buffer, cb as (err?: Error) => void);
    return true;
  }
}

// tslint:disable-next-line: variable-name
export const InkContext = React.createContext({
  stdin: new InkStdin(),
  stdout: new InkStdout(),
});
