class Pdf {
  constructor(doc,text) {
    this.text = text
    this.doc = doc
  }

  waterMark(doc,text) {
      const pageSize = doc.metadata['1']['size']
      const pageNumber = doc.metadata['pages']
      const textBoxSize = [pageSize[0],150]

      function editPage(pageIndex) {
        doc
        .editPage(pageIndex+1)
        .text(text, (pageSize[0] - textBoxSize[0])/2, (pageSize[1] - textBoxSize[1])/2,{
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