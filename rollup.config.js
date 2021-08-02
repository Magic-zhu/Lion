import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import {terser} from 'rollup-plugin-terser';

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/lion.iife.min.js',
      format: 'iife',
    },
    {
      file: 'dist/lion.esm.min.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    // terser(),
  ],
},
// {
//   input: ['./src/@types/index.d.ts'],
//   output: [{file: 'build/index.d.ts', format: 'es'}],
//   plugins: [dts()],
// },
];

