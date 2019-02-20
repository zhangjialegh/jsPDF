const fs = require('fs'),
    http = require('http'),
    path = require('path')

const saveFile = (uri, filename) => {
  return new Promise((resolve, reject) => {
    const pathname =  path.resolve('../images', filename)
    http.get(uri,(res) => {
      const stream = fs.createWriteStream(pathname)
      stream.on('error',(err) => {
        console.log(err,'error')
        reject(err)
      })
      stream.on('finish',() => {
        console.log('done')
        resolve()
      })
      res.on('data',(chunk) => {
        stream.write(chunk,() => {
          stream.end()
        })
      })
      res.on('end',() => {
        console.log('res end');
      })
    })
  })
}

const clearFile = (path) => {
  return new Promise((resolve,reject) => {
    if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach((file) => {
          const curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()) { // recurse
              deleteFolderRecursive(curPath);
          } else { // delete file
              fs.unlinkSync(curPath);
          }
      })
      resolve(`path:${path} had been clean!`)
    } else {
      reject(new Error(`${path} can not be found!`))
    }
  })
}

module.exports = {
  saveFile,
  clearFile
}

