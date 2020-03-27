import React, { FC } from 'react';
// import pyodide from 'https://pyodide.cdn.iodide.io/pyodide.js';

function load<T>(url: string, resolver: () => T): Promise<T> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    script.onload = () => resolve(resolver());
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

type Pyodide = {
  runPython: (repl: string) => unknown;
};

type LanguagePluginLoader = Promise<Pyodide>;

function pyodideLoader(): Promise<LanguagePluginLoader> {
  return load('https://pyodide.cdn.iodide.io/pyodide.js', () => {
    return (window as any)['languagePluginLoader'] as LanguagePluginLoader;
  });
}

const pyodide: FC = () => {
  return <></>;
};
