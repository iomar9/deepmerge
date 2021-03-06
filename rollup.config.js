import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const pkg = require(`./package.json`)

export default {
	input: `index.js`,
	name: `deepmerge`,
	plugins: [
		commonjs(),
		resolve(),
	],
	output: [
		{ file: pkg.main, format: `umd` },
	],
}
