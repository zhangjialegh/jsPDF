const path = require('path')
const HummusRecipe = require('hummus-recipe');
const process = require('process')
const Pdf = require('./assets/js/Pdf')

// 添加水印的文本
const text = process.argv[2] || 'SAMPLE'

// 需要添加水印的文档名称以及导出文档的名称
let entryName = 'Atlanta_data_report-sample.pdf'
let outName = 'Atlanta_data_report-watermark.pdf'



if(!text) {
  throw Error('Please type text of watermark end of scripts.')
}
const fn = async () => {
  try{
      const doc = new HummusRecipe(path.resolve(__dirname,entryName), outName);
      const pdf = new Pdf(doc)
      pdf.waterMark(text)
      doc.endPDF()
      console.log('Add WaterMark Success!');
  } catch (err) {
    console.log(err);
  }
}

fn()
