const process = require('process')
const pathNode = require('path')
const fs = require('fs')
const readlineSync = require('readline-sync');
const defaultName = 'output'

function deleteFiles(pathname) {
  const path = pathNode.resolve(__dirname,'../src/'+pathname)
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach((file) => {
        const curPath = path + "/" + file;
        if(fs.statSync(curPath).isDirectory()) { // recurse
            deleteFiles(curPath);
        } else { // delete file
            fs.unlinkSync(curPath);
            console.log(`delete '${curPath}' succeed.`);
        }
    })
    console.log(`'${path}' had been clean!`);
  } else {
    throw Error(`'${path}' can not be found!`)
  }
}

const pathname = process.argv[2] || defaultName
if(pathname !== defaultName) {
  ;(
    function fn() {
      const ans = readlineSync.question(`Are you sure to delete all files of '${pathname}'?(y/n)`)
      if(ans.toLowerCase() === 'y') {
        deleteFiles(pathname)
      } else if(ans.toLowerCase() === 'n') {
        console.log('Cancel to delete.');
        process.exit()
      } else {
        fn()
      }
    }
  )()
} else {
  deleteFiles(pathname)
}

