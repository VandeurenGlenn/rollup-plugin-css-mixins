import typescript from "@rollup/plugin-typescript";
import cssMixins from './../exports/plugin.js'

export default {
  input: ['./test-element.ts'],
  output: {
    dir: 'exports',
    format: 'es'
  },
  plugins: [
    cssMixins(),
    typescript()
  ]
}