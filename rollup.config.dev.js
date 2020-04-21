import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';

export default {
    input: 'src/index.js',
    output: {
        file: 'probe.js',
        format: 'iife',
        name: 'probe'
    },
    plugins: [
        serve({
            open: true,
            openPage: '/test/index.html',
            contentBase: ['.', 'test']
        }),
        resolve(),
        commonjs(),
        eslint({
            exclude: 'node_modules/**'
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};