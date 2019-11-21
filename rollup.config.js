import angularOptimizer from 'rollup-plugin-angular-optimizer';
import nodeResolve from 'rollup-plugin-node-resolve';
import paths from 'rollup-plugin-paths';
import pathMapping from 'rxjs/_esm5/path-mapping';
import uglify from 'rollup-plugin-uglify';

export default {
  input: `./dist/out-tsc/src/app.component.js`,
  output: {
    name: 'hw',
    file: `dist/ivy/bundle.js`,
    format: 'iife',
    sourcemap: false
  },
  plugins: [
    paths(pathMapping()),
    nodeResolve({
      mainFields: ['module', 'main', 'jsnext:main']
    }),
    angularOptimizer(),// fixme PROBLEM WITH THIS OLD PLUGIN
    uglify.uglify({
      mangle: true,
      compress: {
        global_defs: {
          'ngDevMode': false,
        },
        keep_fargs: false,
        passes: 3,
        pure_getters: true,
        unsafe: true,
      }
    })
  ],
  external: []
}
