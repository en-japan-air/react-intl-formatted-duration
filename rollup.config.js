import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'index.js',
  plugins: [
    resolve({ module: false }),
    commonjs(),
    babel(),
    filesize(),
  ],
  external: Object.keys(pkg.peerDependencies),
  output: [{
    exports: 'named',
    file: 'dist/bundle.js',
    format: 'cjs',
  }, {
    file: 'dist/module.js',
    format: 'es',
  }],
};
