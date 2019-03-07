const pathNode = require('path')
const fs = require('fs')
const defaultName = 'pdfkit.es5.js'

function deleteFiles(file) {
  const path = pathNode.resolve(__dirname,'../node_modules/pdfkit/js/'+file)
  if( fs.existsSync(path) ) {
    fs.unlinkSync(path);
  } else {
    return
  }
}

deleteFiles(defaultName)
