import typescript from "@rollup/plugin-typescript";

export default {
  input: ['./src/plugin.ts'],
  output: {
    dir: 'exports',
    format: 'es'
  },
  plugins: [
    typescript()
  ]
}