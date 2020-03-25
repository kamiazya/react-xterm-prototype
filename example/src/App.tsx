// tslint:disable: variable-name
import React, { FC, useMemo } from 'react';
import { Xterm } from 'react-xterm-prototype';
import { ShellApp } from './ShellApp';

const App: FC = () => {
  return (
    <main>
      {useMemo(
        () => (
          <Xterm cursorStyle="block">
            <ShellApp />
          </Xterm>
        ),
        [],
      )}
    </main>
  );
};

export default App;
