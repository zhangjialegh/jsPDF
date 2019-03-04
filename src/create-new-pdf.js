const path = require('path')
const fs = require('fs')
const {saveFile,clearFile} = require('./assets/js/File')
const PDFDocument = require('pdfkit')
const Jimp = require('jimp')

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
const fn = async () => {
  try{
    // save
    // const uri = 'http://p0.meituan.net/tuanpic/3df525af5a3f7fe04077567d2a6caf794904.png'
    // const filename = 'google.png'
    // await saveFile(uri, filename)




    // keywords

      const doc = new PDFDocument();
      doc.pipe(fs.createWriteStream('file.pdf'))
      // doc.pipe(fs.createReadStream(path.relative(__dirname,'../file.pdf')))
      /**
       ******************************************************************
       */
      doc.fontSize(25).text('Here ilslkfs some vector graphics...', 100, 180);
      const image = await getImage('https://wechat-pics.fangpinduo.com/image/property/53094231/13940383_0_1.jpg')
      console.log(image,'fffff');
      doc.image(image,100,100,{height:100,width:100})
      .text('And here is some wrapped text...', 100, 300)
      
      doc.end();
      
      /**
       ******************************************************************
       */
      console.log('2222222');
      






    // clear
    // const res1 = await clearFile(path.resolve('download'))
    // console.log(res1);
  } catch (err) {
    console.log(err);
  }
}

fn()
