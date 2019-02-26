const path = require('path')
const HummusRecipe = require('hummus-recipe');
const fn = async () => {
  try{
    
      const doc = new HummusRecipe(path.resolve(__dirname,'City_Report_Sample.pdf'), 'output.pdf');
      doc.registerFont('PMingLiU',path.resolve(__dirname,'./assets/font/PMingLiU.ttf'))
      const pageSize = doc.metadata['1']['size']
      const pageNumber = doc.metadata['pages']
      const textBoxSize = [pageSize[0],150]


      function editPage(pageIndex) {
        doc
        .editPage(pageIndex+1)
        .text('SAMPLE', (pageSize[0] - textBoxSize[0])/2, (pageSize[1] - textBoxSize[1])/2,{
          // font: 'PMingLiU',
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

      doc.endPDF()
    
  } catch (err) {
    console.log(err);
  }
}

fn()
