const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      // '@primary-color': '#1DA57A'
      '@primary-color': 'rgb(33, 122, 94)'
      // '@brand-primary': '#1cae82',
      // '@brand-primary-tap': '#1DA57A',
    },
  })
);