const path = require('path')
const {toThousandFix,toThousandPrt} = require('../utils')

// 0：下降    1： 增长

class Atlanta {
  constructor(doc) {
    this.doc = doc
  }
  indexNumber (string,x,y,index=1) {
    const doc = this.doc
    doc
    .text( string,x,y,{
      font:'PingFangSC-Medium',
      size: 20,
      color: index ? '#d0121b' : '#2aa738',
      textBox: {
        width: 73,
        height: 20
      }
    })
    .image(path.resolve(__dirname,`../assets/images/pub/${index ? 'up' : 'down'}.png`),x+73,y,{
      height: 16
    })
  }

  tableColumn4 (initLine=418,lineHeight=30,arrayItem=[1,2,3,4],index=0,unit=30) {
    const doc = this.doc
    doc
  .text(arrayItem[0],182.252,initLine+index*unit,{
      font:'PingFangSC-Medium',
      size: 10,
      color: '#000000',
      textBox: {
        width: 90,
        height: 30,
        textAlign:'center',
        lineHeight:lineHeight
      }
    })
    .text(arrayItem[1],275.24,initLine+index*unit,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 30,
        textAlign:'center',
        lineHeight:lineHeight
      }
    })
    .text(arrayItem[2],365.24,initLine+index*unit,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 30,
        textAlign:'center',
        lineHeight:lineHeight
      }
    })
    .text(arrayItem[3],455.24,initLine+index*unit,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 30,
        textAlign:'center',
        lineHeight:lineHeight
      }
    })
  }
  editPage7(year) {
    const doc = this.doc
    // page 7
    doc.editPage(7)
        .text(`${year}年 - 挂牌中位价`,184.082,126.921,{    //第一行
          font:'PingFangSC-Regular',
          size: 12,
          color: '#000000'
        })
        .text(`${year} Median listing price`,184.082,140.882,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#9fa0a0'
        })
        .image(path.resolve(__dirname,'../assets/images/line.png'),184.082,172.851,{
          width: 173,
          height: 97
        })
        .text(`${year}年 - 成交中位价`,378,126.921,{
          font:'PingFangSC-Regular',
          size: 12,
          color: '#000000'
        })
        .text(`${year} Median sale price`,378,140.882,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#9fa0a0'
        })
        .image(path.resolve(__dirname,'../assets/images/line.png'),378,172.851,{
          width: 173,
          height: 97
        })
        .text(`${year}年 - 整体成交周期`,184.082,292.854,{    //第二行
          font:'PingFangSC-Regular',
          size: 12,
          color: '#000000'
        })
        .text(`${year} Days on market`,184.082,306.85,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#9fa0a0'
        })
        .image(path.resolve(__dirname,'../assets/images/line.png'),184.082,338.85,{
          width: 173,
          height: 97
        })
        .text(`${year}年 - 租金`,378,292.854,{
          font:'PingFangSC-Regular',
          size: 12,
          color: '#000000'
        })
        .text(`${year} Rental price`,378,306.85,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#9fa0a0'
        })
        .image(path.resolve(__dirname,'../assets/images/line.png'),378,338.85,{
          width: 173,
          height: 97
        })
        .text(`${year}年 - 租金回报率`,184.082,458.787,{    //第三行
          font:'PingFangSC-Regular',
          size: 12,
          color: '#000000'
        })
        .text(`${year} Rental return`,184.082,472.819,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#9fa0a0'
        })
        .image(path.resolve(__dirname,'../assets/images/line.png'),184.082,504.819,{
          width: 173,
          height: 97
        })
        .text(`${year}年 - 库存`,378,458.787,{
          font:'PingFangSC-Regular',
          size: 12,
          color: '#000000'
        })
        .text(`${year} Inventory amount`,378,472.819,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#9fa0a0'
        })
        .image(path.resolve(__dirname,'../assets/images/line.png'),378,504.819,{
          width: 173,
          height: 97
        })
        .circle(186,640,1,{
          fill: '#3e3a3a'
        })
        .text('截止到2018年12月，\natlanta都会区最新挂牌房价为239900.0，2018年一整年房价的来看，挂牌房价全年增长2.09%；最新成交房价为$210000.0, 成交房价全年增长2.09%',196.673,630,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#3e3a3a',
          textBox: {
            width: 345.8,
            lineHeight: 14
          }
        })
        .circle(186,696,1,{
          fill: '#3e3a3a'
        })
        .text('Atlanta都会区最新租金为1450.0,全年增长3.31%',196.673,686,{
          font:'PingFangSC-Regular',
          size: 10,
          color: '#3e3a3a',
          textBox: {
            width: 345.8,
            lineHeight: 14
          }
        })
        .endPage()
  }
  editPage8() {
    const doc = this.doc
    // page 8
    doc.editPage(8)
    .text('2,233,455',275,127.842,{
      font:'PingFangSC-Medium',
      size: 24,
      color: '#3e3a3a',
      textBox: {
        width: 150,
        height: 36.85
      }
    })
    .image(path.resolve(__dirname,'../assets/images/pie.png'),182.986,182.065,{
      width: 116,
      height: 76.5
    })
    .image(path.resolve(__dirname,'../assets/images/pie.png'),308.462,182.065,{
      width: 116,
      height: 76.5
    })
    .image(path.resolve(__dirname,'../assets/images/pie.png'),433.701,182.065,{
      width: 116,
      height: 76.5
    })
    this.indexNumber('99.99%',196.299,313.799,1)

    doc
    .text('2018年\n房价增长10.12%',196.299,340,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 104,
        lineHeight: 12
      }
    })
    this.indexNumber('99.99%',320.588,313.799,0)

    doc
    .text('2018年\n房价增长10.12%',320.588,340,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 104,
        lineHeight: 12
      }
    })
    this.indexNumber('99.99%',442.218,313.799,1)

    doc
    .text('2018年\n房价增长10.12%',442.218,340,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 104,
        lineHeight: 12
      }
    })
    .text('2018年房价',182.268,400.582,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a'
    })
    .text('December house price',182.268,414,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#9fa0a0'
    })
    .text('$23.0万',275.24,464.503,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:15
      }
    })
    .text('$23.0万',365.24,464.503,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:15
      }
    })
    .text('$23.0万',455.24,464.503,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:15
      }
    })
    .text('$23.0万',275.24,494,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:15
      }
    })
    .text('$23.0万',365.24,494,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:15
      }
    })
    .text('$23.0万',455.24,494,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:15
      }
    })
    .text('2018年租金',182.268,555.921,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a'
    })
    .text('December house price',182.268,569.921,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#9fa0a0'
    })
    .text('$23.0万',275.24,618.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',365.24,618.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',455.24,618.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',275.24,692.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',365.24,692.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',455.24,692.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',275.24,722.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',365.24,722.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',455.24,722.661,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .endPage()
  }
  editPage9() {
    const doc = this.doc
    // page 9
    doc
    .editPage(9)
    .image(path.resolve(__dirname,'../assets/images/multiline.png'),184.252,174.247,{
      width: 358,
      height: 122,
      keepAspectRatio: false
    })
    this.indexNumber('99.9%',198.927,320.315,1)

    doc
    .text('2007年- 2012年下跌34%',198.927,350.035,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 86,
        height: 24,
        lineHeight: 12
      }
    })
    this.indexNumber('7.25%',320.588,320.315,1)
    
    doc
    .text('2018年\n房价增长10.12%',320.588,350.035,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 104,
        height: 24,
        lineHeight: 12
      }
    })
    this.indexNumber('7.25%',442.218,320.315,0)

    doc
    .text('2018年\n房价增长10.12%',442.218,350.035,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 104,
        height: 24,
        lineHeight: 12
      }
    })
    .text('12月房价',182.252,428.313,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#000000',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',275.24,428.313,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',365.24,428.313,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',455.24,428.313,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('12月租金',182.252,499.291,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#000000',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',275.24,499.291,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',365.24,499.291,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .text('$23.0万',455.24,499.291,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 90,
        height: 27.661,
        textAlign:'center',
        lineHeight:16
      }
    })
    .circle(186,557.559,1,{
      fill: '#3e3a3a'
    })
    .text('2007-2012年\n受美国次贷危机影响，这段期间房价下跌34%',196.673,547.559,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .circle(186,598.898,1,{
      fill: '#3e3a3a'
    })
    .text('2013-2018\n这段期间房价快速上涨，幅度达74%,年平均增长12.4%',196.673,588.898,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .circle(186,640.945,1,{
      fill: '#3e3a3a'
    })
    .text('2018年\n截止到2018年12月，atlanta都会区最新挂牌房价为239900.0，2018年一整年房价的来看，挂牌房价全年增长2.09%；最新成交房价为210000.0, 成交房价全年增长2.09%',196.673,630.945,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .text('Atlanta都会区最新租金为1450.0,全年增长3.31%',196.673,700.157,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .circle(186,738.787,1,{
      fill: '#3e3a3a'
    })
    .text('2019年预测\n美国在线房产数据网站Zillow预计未来一年该地区房价将继续保持7.4%的年增长。',196.673,728.787,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .endPage()
  }
  editPage10() {
    const doc = this.doc
    const self = this
    // page 10
    doc
    .editPage(10)
    .image(path.resolve(__dirname,'../assets/images/multiline.png'),184.252,171.968,{
        width: 366.378,
        height: 195.402,
        keepAspectRatio: false
      })
      for (let i = 0; i < 12; i++) {
        self.tableColumn4(418,18,[1,2,3,4],i,29.6)
      }
      doc.endPage()
  }
  editPage11() {
    const doc = this.doc
    // page 11
    doc.editPage(11)
    .image(path.resolve(__dirname,'../assets/images/multiline.png'),184.082,153.516,{
      width: 358.294,
      height: 127.378,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,'../assets/images/multiline.png'),184.082,321.858,{
      width: 358.294,
      height: 140.016,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,'../assets/images/multiline.png'),184.082,599.528,{
      width: 358.294,
      height: 145.658,
      keepAspectRatio: false
    })
    .circle(186,474.882,1,{
      fill: '#3e3a3a'
    })
    .text('成交周期反映房源在市场上的消化速度,该指标是未来半年房价走势的方向标',196.673,464.882,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .circle(186,490.535,1,{
      fill: '#3e3a3a'
    })
    .text('如图所示，目前atlanta都会区房源平均成交周期为49.75天，同比-21.65%,环比 -1.97%',196.673,480.535,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .circle(186,757.587,1,{
      fill: '#3e3a3a'
    })
    .text('从房源供应数量来看，atlanta都会区2018年12月市场库存数为27952套，同比7.3%，环比-1.1%',196.673,747.587,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .endPage()
  }
  editPage12() {
    const doc = this.doc
    // page 12
    doc.editPage(12)
    .text('当前租金',182.252+58,466.323,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('小户型',182.252+58+75,466.323,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('中户型',182.252+58+75+75,466.323,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('大户型',182.252+58+75+75+75,466.323,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('中位价',182.252,493.362,{
      font:'PingFangSC-Medium',
      size: 10,
      color: '#000000',
      textBox: {
        width: 58,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('$23.0万',182.252+58,493.362,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('$23.0万',182.252+58+75,493.362,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('$23.0万',182.252+58+75+75,493.362,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .text('$23.0万',182.252+58+75+75+75,493.362,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 75,
        height: 30,
        textAlign:'center',
        lineHeight:18
      }
    })
    .image(path.resolve(__dirname,'../assets/images/multiline.png'),184.082,139.74,{
      width: 358.294,
      height: 133.834,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,'../assets/images/multiline.png'),184.082,326.748,{
      width: 358.294,
      height: 130.976,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,'../assets/images/multibar.png'),184.082,612.403,{
      width: 358.294,
      height: 151.763,
      keepAspectRatio: false
    })
    .circle(186,529.658,1,{
      fill: '#3e3a3a'
    })
    .text('亚特兰大都会区在过去8年间，租金增长百分比18%',196.673,519.658,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .circle(186,545.831,1,{
      fill: '#3e3a3a'
    })
    .text('亚特兰大都会区,2018年10月租金中位数$1458,小户型$1366,中户型$1470,大户型$2010',196.673,535.831,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .circle(186,767.634,1,{
      fill: '#3e3a3a'
    })
    .text('亚特兰大都会区最近几年的租金收益率位于区间7.0%-9.2%之间，其中中小户型租金收益率高于7.6%,而大户型的租金收益率中位数为5.9%附近',196.673,757.634,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    .endPage()
  }
  editPage13() {
    const doc = this.doc
    const self = this
    doc
    .editPage(13)

    for (let i = 0; i < 8; i++) {
      self.tableColumn4(439.882,24,['挂牌中位价',3,4,6],i,38)
    }

    doc.endPage()
  }
  // 7: 6图
  editPdf(year=2018) {
    this.editPage7(year)          
    this.editPage8()
    this.editPage9()
    this.editPage10()
    this.editPage11()
    this.editPage12()
    this.editPage13()
  }
}

module.exports = Atlanta;
