import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	declaration: true,
	entries: [
		{
			input: 'src/',
			outDir: 'dist',
			ext: 'cjs',
			format: 'cjs',
			declaration: true,
		},
		{
			input: 'src/',
			outDir: 'dist',
			ext: 'mjs',
			format: 'esm',
			declaration: true,
		},
	],
	rollup: {
		emitCJS: true,
	},
})
