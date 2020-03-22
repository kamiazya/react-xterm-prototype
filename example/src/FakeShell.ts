import { Terminal } from 'xterm';
export class FakeShell {
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
  public prompt() {
    this.term.write(this.promptStr);
  }
}
