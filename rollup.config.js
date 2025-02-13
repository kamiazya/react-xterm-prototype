import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true,
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs()
  ]
}
