const config = {
  projectName: 'codex_demo',
  date: '2025-07-02',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-platform-weapp', '@tarojs/plugin-framework-react'],
  framework: 'react',
  mini: {},
  h5: {}
}
module.exports = function(merge) {
  return merge({}, config)
}
