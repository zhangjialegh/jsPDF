export const Pdf = async (doc, getImage, getFont) => {
  const PingFangSCRegular = await getFont(require('./assets/font/PingFangSC-Regular.ttf'))
  doc.registerFont('PingFangSC-Regular', PingFangSCRegular)


  doc
  .fontSize(25).text('Here is some vector graphics...', 100, 80);
  const image = await getImage(require('./assets/images/2.png'))
  
  doc
  .addPage()
  .image(image,100,100,{height:100,width:100})
  .font('PingFangSC-Regular')
  .text('And here is some wrapped text...', 100, 300)
  .font('PingFangSC-Regular')
  .text('禹卫书法行书简体.')
}
