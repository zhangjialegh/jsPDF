const path = require('path')
const HummusRecipe = require('hummus-recipe');
const Pdf = require('./assets/js/Pdf')
const text = require('process').argv[2]

if(!text) {
  throw Error('Please type text of watermark end of scripts.')
}
const fn = async () => {
  try{
      const doc = new HummusRecipe(path.resolve(__dirname,'Atlanta_data_report-sample.pdf'), 'Atlanta_data_report-watermark.pdf');
      const pdf = new Pdf(doc)
      pdf.waterMark(text)
      doc.endPDF()
      console.log('Add WaterMark Success!');
  } catch (err) {
    console.log(err);
  }
}

fn()
