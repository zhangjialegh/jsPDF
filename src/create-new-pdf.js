const path = require('path')
const fs = require('fs')
const {saveFile,clearFile} = require('./assets/js/File')
const {genRandomString} = require('./utils')
const PDFDocument = require('pdfkit')
const Jimp = require('jimp')
// const {Pdf} = require('./template/dev-template-pdf')
// const {Pdf} = require('./template/dev-template-pdf')

const outName =  `${genRandomString('new',6)}.pdf`

const getImage = async (uri) => {
  const res = await Jimp.read(uri)
  return new Promise((resolve,reject) => {
    res.getBuffer(Jimp.MIME_PNG,(err, re) => {
      if(err) {
        reject(err)
      } else {
        resolve(re)
      }
    })
  })
}

const getFont = (uri) => {
  return new Promise((resolve,reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', uri, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if(xhr.status === 200) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send()
  })
}
const fn = async () => {
  try{
    // save
    // const uri = 'http://p0.meituan.net/tuanpic/3df525af5a3f7fe04077567d2a6caf794904.png'
    // const filename = 'google.png'
    // await saveFile(uri, filename)




    // keywords

      const doc = new PDFDocument();
      doc.pipe(fs.createWriteStream(path.resolve(__dirname,'./output/'+outName)))
      // doc.pipe(fs.createReadStream(path.relative(__dirname,'../file.pdf')))
      /**
       ******************************************************************
       */
      doc.text('sdfsfsdfsfsf')
      doc.end();
      /**
       ******************************************************************
       */




    // clear
    // const res1 = await clearFile(path.resolve('download'))
    // console.log(res1);
  } catch (err) {
    console.log(err);
  }
}





fn()
console.log('Processing...')
