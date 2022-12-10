import uglify from 'rollup-plugin-uglify-es';
export default {
  input: "./src/index.js",
  output: [
    {
      file: 'lib/index.cjs.js', // 输出文件
      format: 'cjs',  //  五种输出格式：amd /  es6 / iife / umd / cjs
      sourcemap: false  //生成bundle.map.js文件，方便调试
    },
    {
      file: 'lib/index.esm.js', // 输出文件
      format: 'es',  //  五种输出格式：amd /  es6 / iife / umd / cjs
      sourcemap: false  //生成bundle.map.js文件，方便调试
    },
    {
      file: 'lib/index.umd.js', // 输出文件
      format: 'umd',  //  五种输出格式：amd /  es6 / iife / umd / cjs
      name: 'style-to-view',
      sourcemap: false  //生成bundle.map.js文件，方便调试
    }
  ],
  plugins: [
    uglify({})
  ]
}