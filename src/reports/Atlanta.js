const path = require('path')
const {name,dataDesc} = require('../config')

// 0：下降    1： 增长

class Atlanta {
  constructor(doc) {
    this.doc = doc
  }

  // 涨跌显示效果处理
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

  // 表格渲染逻辑
  tableColumn4 (initLine=418,lineHeight=30,arrayItem=[1,2,3,4],index=0,unit=30,titleAlign='center',titleIndent=0) {
    const doc = this.doc
    doc
  .text(arrayItem[0],182.252+titleIndent,initLine+index*unit,{
      font:'PingFangSC-Medium',
      size: 10,
      color: '#000000',
      textBox: {
        width: 90,
        height: 30,
        textAlign:titleAlign,
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

  // 描述渲染逻辑(列表)
  descRender (x,y,content,showDot=true) {
    const doc = this.doc
    if(showDot) {
      doc
      .circle(186,y+10,1,{
        fill: '#3e3a3a'
      })
    }
    doc
    .text(content,x,y,{
      font:'PingFangSC-Regular',
      size: 10,
      color: '#3e3a3a',
      textBox: {
        width: 345.8,
        lineHeight: 14
      }
    })
    return doc
  }
  editPage7({year}) {
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
        .image(path.resolve(__dirname,`../assets/images/${name['a']}.png`),184.082,172.851,{
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
        .image(path.resolve(__dirname,`../assets/images/${name['b']}.png`),378,172.851,{
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
        .image(path.resolve(__dirname,`../assets/images/${name['c']}.png`),184.082,338.85,{
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
        .image(path.resolve(__dirname,`../assets/images/${name['d']}.png`),378,338.85,{
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
        .image(path.resolve(__dirname,`../assets/images/${name['e']}.png`),184.082,504.819,{
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
        .image(path.resolve(__dirname,`../assets/images/${name['f']}.png`),378,504.819,{
          width: 173,
          height: 97
        })
        this.descRender(196.673,630,dataDesc['page7'][0]['content'],dataDesc['page7'][0]['showDot'])
        this.descRender(196.673,686,dataDesc['page7'][1]['content'],dataDesc['page7'][1]['showDot'])
        doc
        .endPage()
  }
  editPage8() {
    const doc = this.doc
    // page 8
    doc.editPage(8)
    // .text('2,233,455',275,127.842,{
    //   font:'PingFangSC-Medium',
    //   size: 24,
    //   color: '#3e3a3a',
    //   textBox: {
    //     width: 150,
    //     height: 36.85
    //   }
    // })
    // .image(path.resolve(__dirname,'../assets/images/pie.png'),182.986,182.065,{
    //   width: 116,
    //   height: 76.5
    // })
    // .image(path.resolve(__dirname,'../assets/images/pie.png'),308.462,182.065,{
    //   width: 116,
    //   height: 76.5
    // })
    // .image(path.resolve(__dirname,'../assets/images/pie.png'),433.701,182.065,{
    //   width: 116,
    //   height: 76.5
    // })
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
    .image(path.resolve(__dirname,`../assets/images/${name['g']}.png`),184.252,174.247,{
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
    this.descRender(196.673,547.559,dataDesc['page9'][0]['content'],dataDesc['page9'][0]['showDot'])
    this.descRender(196.673,588.898,dataDesc['page9'][1]['content'],dataDesc['page9'][1]['showDot'])
    this.descRender(196.673,630.945,dataDesc['page9'][2]['content'],dataDesc['page9'][2]['showDot'])
    this.descRender(196.673,700.157,dataDesc['page9'][3]['content'],dataDesc['page9'][3]['showDot'])
    this.descRender(196.673,728.787,dataDesc['page9'][4]['content'],dataDesc['page9'][4]['showDot'])
    doc
    .endPage()
  }
  editPage10({listings_compare}) {
    const doc = this.doc
    const self = this
    // page 10
    doc
    .editPage(10)
    .image(path.resolve(__dirname,`../assets/images/${name['k']}.png`),184.252,171.968,{
        width: 366.378,
        height: 180.402,
        keepAspectRatio: false
      })
      for (let i = 0; i < listings_compare.length; i++) {
        self.tableColumn4(418,18,[listings_compare[i]['date'],listings_compare[i]['listing'],listings_compare[i]['closing'],listings_compare[i]['ratio']],i,29.6)
      }
      doc.endPage()
  }
  editPage11() {
    const doc = this.doc
    // page 11
    doc.editPage(11)
    .image(path.resolve(__dirname,`../assets/images/${name['j']}.png`),184.082,153.516,{
      width: 358.294,
      height: 127.378,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,`../assets/images/${name['m']}.png`),184.082,321.858,{
      width: 358.294,
      height: 140.016,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,`../assets/images/${name['h']}.png`),184.082,599.528,{
      width: 358.294,
      height: 145.658,
      keepAspectRatio: false
    })
    this.descRender(196.673,464.882,dataDesc['page11'][0]['content'],dataDesc['page11'][0]['showDot'])
    this.descRender(196.673,480.535,dataDesc['page11'][1]['content'],dataDesc['page11'][1]['showDot'])
    this.descRender(196.673,747.587,dataDesc['page11'][2]['content'],dataDesc['page11'][2]['showDot'])
    doc
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
    .image(path.resolve(__dirname,`../assets/images/${name['i']}.png`),184.082,139.74,{
      width: 358.294,
      height: 133.834,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,`../assets/images/${name['l']}.png`),184.082,326.748,{
      width: 358.294,
      height: 130.976,
      keepAspectRatio: false
    })
    .image(path.resolve(__dirname,`../assets/images/${name['q']}.png`),184.082,612.403,{
      width: 358.294,
      height: 151.763,
      keepAspectRatio: false
    })
    this.descRender(196.673,519.658,dataDesc['page12'][0]['content'],dataDesc['page12'][0]['showDot'])
    this.descRender(196.673,535.831,dataDesc['page12'][1]['content'],dataDesc['page12'][1]['showDot'])
    this.descRender(196.673,757.634,dataDesc['page12'][2]['content'],dataDesc['page12'][2]['showDot'])
    doc.endPage()
  }

  editPage13({campare_around}) {
    const doc = this.doc
    const self = this
    doc
    .editPage(13)
    for (let i = 0; i < campare_around.length; i++) {
      self.tableColumn4(439.882,24,[campare_around[i]['title'],campare_around[i]['atl'],campare_around[i]['mar'],campare_around[i]['alp']],i,38,'left',25)
    }
    doc.endPage()
  }
  
 
  editPdf({page7,page10,page13}) {
    this.editPage7(page7)          
    this.editPage8()
    this.editPage9()
    this.editPage10(page10)
    this.editPage11()
    this.editPage12()
    this.editPage13(page13)
  }
}

module.exports = Atlanta;
