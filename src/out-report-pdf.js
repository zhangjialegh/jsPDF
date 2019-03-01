const path = require('path')
const fs = require('fs')
const parse = require("csv-parse/lib/sync")
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
      const doc = new HummusRecipe(path.resolve(__dirname,'Atlanta_data_report-sample.pdf'), 'Atlanta_data_report.pdf');
      // 添加水印
      // const text = 'SAMPLE'
      // const pdf = new Pdf()
      // pdf.waterMark(doc,text)
      // const pageNumber = doc.metadata['pages']
      // const image = await getImage('https://wechat-pics.fangpinduo.com/image/property/53094231/13940383_0_1.jpg')

      doc.registerFont('PingFangSC-Regular',path.resolve(__dirname,'./assets/font/PingFangSC-Regular.ttf'))
      doc.registerFont('PingFangSC-Semibold',path.resolve(__dirname,'./assets/font/PingFangSC-Semibold.ttf'))
      doc.registerFont('PingFangSC-Medium',path.resolve(__dirname,'./assets/font/PingFangSC-Medium.ttf'))
      
      // page7 
      const year = 2018
      // page10 历史成交价，挂牌价对比
      const data0=fs.readFileSync(path.resolve(__dirname,'./data/listings_compare.csv'))
      const listings_compare = parse(data0,{columns:true})
      // page13 重点区域对比数据
      const data1=fs.readFileSync(path.resolve(__dirname,'./data/campare_around.csv'))
      const campare_around = parse(data1,{columns:true})
      
      const atlanta = new Atlanta(doc)
      atlanta.editPdf({
        page7: {
          year
        },
        page10: {
          // date,closing,listing,ratio
          listings_compare: listings_compare.map((item) => {
            return {
              date: item['date'].split('-')[0],
              closing: '$'+toThousandFix(item['closing'],0),
              listing: '$'+toThousandFix(item['listing'],0),
              ratio: toThousandPrt(item['ratio'].split('%')[0],2)+'%'
            }
          })
        },
        page13: {
          campare_around:campare_around.map((item,index) => {
            if(index===0 || index===1 || index===6) {
              return {
                title: item['title'],
                atl: '$'+toThousandFix(item['atl'],0),
                mar: '$'+toThousandFix(item['mar'],0),
                alp: '$'+toThousandFix(item['alp'],0),
              }
            } else if(index===4 || index===5 || index===7) {
              return {
                title: item['title'],
                atl: toThousandPrt(item['atl'].split('%')[0],2)+'%',
                mar: toThousandPrt(item['mar'].split('%')[0],2)+'%',
                alp: toThousandPrt(item['alp'].split('%')[0],2)+'%'
              }
            } else {
              return item
            }
          })
        }
      })






      doc.endPDF()
  } catch (err) {
    console.log(err);
  }
}

fn()
