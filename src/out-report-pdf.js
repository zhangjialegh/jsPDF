const path = require('path')
const fs = require('fs')
const parse = require("csv-parse/lib/sync")
const HummusRecipe = require('hummus-recipe');
const Report = require('./reports/Report')
const {toThousandFix,toThousandPrt} = require('./utils')

console.log('Editing...');

let entryName = 'Atlanta_data_report-sample.pdf'  //引入模板名称
let outName = 'Atlanta_data_report.pdf'         //导出PDF名称

const fn = async () => {
  try{
      const doc = new HummusRecipe(path.resolve(__dirname,entryName), outName);
      // 自定义字体
      doc.registerFont('PingFangSC-Regular',path.resolve(__dirname,'./assets/font/PingFangSC-Regular.ttf'))
      doc.registerFont('PingFangSC-Semibold',path.resolve(__dirname,'./assets/font/PingFangSC-Semibold.ttf'))
      doc.registerFont('PingFangSC-Medium',path.resolve(__dirname,'./assets/font/PingFangSC-Medium.ttf'))
      
      /**
       * @参数定义
       * status=> 0: 下跌  1:增长(默认)  -1:无 
       */

      // page7 page8
      const year = 2018
      const month = 12
      // page8     
      const priceTrendOne = [
        {
          status: 1,
          ratio: '10.12%' //房价增长
        },
        {
          status: -1,
          ratio: '7.25%'  //租金收益率
        },
        {
          status: 1,
          ratio: '7.80%' //预计房价变化
        },
      ]
      const priceTrendTwo = {
        listing: ['$25.0万','10.02%','-0.99%'],
        closing: ['$21.0万','1.16%','0.00%'],
        rental: ['$1,458','4.11%','-1.27%'],
        longRent: ['20,461套','$1,458','8.33%'],
        shortRent: ['7,442套','$1,680','9.60%']
      }
      // page9
      const listingOne = [
        {
          status: 0,
          ratio: '34.00%',
          text: '2007年- 2012年\n下跌34%'
        },
        {
          status: 1,
          ratio: '12.40%',  
          text:'2012年- 2018年\n年均增长12.4%'
        },
        {
          status: 1,
          ratio: '74.00%',
          text:'最近6年\n累积增长74%'
        },
      ]
      const listingTwo = {
        price: ['$25.0万','10.02%','-0.99%'],
        rental: ['$1,458','4.11%','-1.27%'],
      }
      // page10 历史成交价，挂牌价对比
      const data0=fs.readFileSync(path.resolve(__dirname,'./data/listings_compare.csv'))
      const listings_compare = parse(data0,{columns:true})
      // page12 
      const rentalTwo = {
        median:['$1,951','$1,744','$2,411','$3,000']
      }
      // page13 重点区域对比数据
      const data1=fs.readFileSync(path.resolve(__dirname,'./data/campare_around.csv'))
      const campare_around = parse(data1,{columns:true})
      

      // 编辑PDF逻辑从这里开始
      const report = new Report(doc)
      report.editPdf({
        page7: {
          year
        },
        page8: {
          year,
          month,
          priceTrendOne,
          priceTrendTwo
        },
        page9: {
          month,
          listingOne,
          listingTwo
        },
        page10: {
          listings_compare: listings_compare.map((item) => {
            return {
              date: item['date'].split('-')[0],
              closing: '$'+toThousandFix(item['closing'],0),
              listing: '$'+toThousandFix(item['listing'],0),
              ratio: toThousandPrt(item['ratio'].split('%')[0],2)+'%'
            }
          })
        },
        page12: {
          rentalTwo
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
