function Pdf(doc, getImage, getFont){
  ;(async function() {
      const PingFangSCRegular = await getFont(require('../assets/font/PingFangSC-Regular.ttf'))
      doc.registerFont('PingFangSC-Regular', PingFangSCRegular)


      doc
      .fontSize(25).text('Here is some vector graphics...', 100, 80);
      const image = await getImage(require('../assets/images/pub/down.png'))
      console.log(image,'image');
      
      doc
      .addPage()
      .image(image)
      .text('And here is some wrapped text...', 100, 300)
      .font('PingFangSC-Regular')
      .text('禹卫书法行书简体.')



      doc.end()
    }
  )()
}

export default Pdf

