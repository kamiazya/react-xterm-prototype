// tslint:disable: variable-name
import React, { FC, useMemo } from 'react';
import { Xterm } from 'react-xterm-prototype';
import { MyShellApp } from './MyShellApp';

const App: FC = () => {
  return (
    <main>
      {useMemo(
        () => (
          <Xterm cursorStyle="block">
            <MyShellApp />
          </Xterm>
        ),
        [],
      )}
    </main>
  );
};

export default App;
