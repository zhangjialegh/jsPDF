const path = require('path')
const HummusRecipe = require('hummus-recipe');
const Pdf = require('./assets/js/Pdf')
const Jimp = require('jimp')
const Atlanta = require('./reports/Atlanta')
const {toThousandFix,toThousandPrt} = require('./utils')

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
      const doc = new HummusRecipe(path.resolve(__dirname,'Atlanta_data_report-sample.pdf'), 'output.pdf');
      // 添加水印
      // const text = 'SAMPLE'
      // const pdf = new Pdf()
      // pdf.waterMark(doc,text)
      // const pageNumber = doc.metadata['pages']
      doc.registerFont('PingFangSC-Regular',path.resolve(__dirname,'./assets/font/PingFangSC-Regular.ttf'))
      doc.registerFont('PingFangSC-Semibold',path.resolve(__dirname,'./assets/font/PingFangSC-Semibold.ttf'))
      doc.registerFont('PingFangSC-Medium',path.resolve(__dirname,'./assets/font/PingFangSC-Medium.ttf'))
      // 
      // const image = await getImage('https://wechat-pics.fangpinduo.com/image/property/53094231/13940383_0_1.jpg')
      const atlanta = new Atlanta(doc)
      atlanta.editPdf(2019)






      doc.endPDF()
  } catch (err) {
    console.log(err);
  }
}

fn()
