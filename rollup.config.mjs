import { dts } from 'rollup-plugin-dts'

const config = [
  {
    input: 'projects/ngx-meta/dist/json-ld/index.d.ts',
    output: {
      format: 'es',
      file: 'projects/ngx-meta/dist/json-ld/bundled.d.ts',
    },
    plugins: [
      dts({
        respectExternal: true,
      }),
    ],
    external: [/node_modules/, /ngx-meta\/dist\/(?!json-ld)/],
  },
]

export default config
