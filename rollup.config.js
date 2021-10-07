import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/lion.iife.min.js',
      format: 'iife',
      name: 'Lion',
    },
    {
      file: 'dist/lion.esm.min.js',
      format: 'esm',
      name: 'Lion',
    },
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    // terser(),
  ],
},
];

