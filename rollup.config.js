import process from "process";
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import browsersync from 'rollup-plugin-browsersync';
import md from "rollup-plugin-md";


export default {
  input: './src/index.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    md({
      marked: {       
        gfm: true,
        tables: false,
        breaks: true,
        pedantic: false,
        sanitize: false,
      }
    }),
    resolve({
      jsnext: true,
      browser: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['useState','useEffect','useRef']
      }
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    sass({
      output: "bundle.css",
      options: {
        importer(path) {
          return { file: path.replace(/^~/, 'node_modules/') };
        }
      }
    }),
    (process.env.BUILD === "development" && browsersync({server: '.'}))
  ]
};