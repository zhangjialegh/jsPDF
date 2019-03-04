const path = require('path')
class Pdf {
  constructor(doc) {
    this.doc = doc
  }
  waterMark(text,size=120) {
      const doc = this.doc

      // 自定义字体
      doc.registerFont('PingFangSC-Regular',path.resolve(__dirname,'../font/PingFangSC-Regular.ttf'))
      const pageSize = doc.metadata['1']['size']
      const pageNumber = doc.metadata['pages']
      const textBoxSize = [pageSize[0],size]

      function editPage(pageIndex) {
        doc
        .editPage(pageIndex+1)
        .text(text, (pageSize[0] - textBoxSize[0])/2, (pageSize[1] - textBoxSize[1])/2,{
          font:'PingFangSC-Regular',
          color: '#000000',
          opacity: 0.1,
          rotation: 30,
          rotationOrigin: [pageSize[0]/2,pageSize[1]/2],
          size: textBoxSize[1],
          textBox: {
            textAlign:'center',
            width: textBoxSize[0],
            height: textBoxSize[1]
          }
        })
        .endPage()
        return doc
      }
      for (let index = 0; index < pageNumber; index++) {
       editPage(index)
      }
  }
}

module.exports = Pdf