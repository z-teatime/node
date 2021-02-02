const jsdoc2md = require('jsdoc-to-markdown')
const path = require('path')

jsdoc2md.getTemplateData({ files: path.resolve(__dirname, './template/test01.js') }).then(json => {
  console.log('json', json)
})
