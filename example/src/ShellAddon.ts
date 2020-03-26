import { Terminal, ITerminalAddon } from 'xterm';
export class ShellAddon implements ITerminalAddon {
  public promptStr = '\r\n$ ';
  private terminal!: Terminal;

  get deletable(): boolean {
    return this.terminal.buffer.cursorX > 2;
  }

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

  public delete(): void {
    this.terminal.write('\b \b');
  }

  public write(data: string): void {
    this.terminal.write(data);
  }
}
