
import babel from 'rollup-plugin-babel' 
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

const config = {
    input: 'src/index.js',
    external: id => /^react|styled-jsx/.test(id),
    output: {
        format: 'cjs',
        file: outputFile,
        globals: {
            react: "React",
            rowriter: "rowriter"
        }
    },
    plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
          exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
      ],
      external: id => /^react|styled-jsx/.test(id)
}
export default config