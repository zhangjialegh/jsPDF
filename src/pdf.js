export const Pdf = async (doc, getImage, getFont) => {
  const LXC = await getFont(require('./assets/font/lxc.ttf'))
  const YW = await getFont(require('./assets/font/yw.ttf'))
  const MFDD = await getFont(require('./assets/font/MFDingDing-Regular.otf'))
  console.log(LXC,'font');
  doc.registerFont('LXC', LXC)
  doc.registerFont('YW', YW)
  doc.registerFont('MFDD', MFDD)

  doc.font('MFDD')
  .fontSize(25).text('Here is some vector graphics...', 100, 80);
  const image = await getImage(require('./assets/images/2.png'))
  console.log(image,'image');
  doc.addPage()
  doc.image(image,100,100,{height:100,width:100})
  .font('YW')
  .text('And here is some wrapped text...', 100, 300)

  doc.font('LXC')
  .text('禹卫书法行书简体.')
  doc.font('YW')
  .text('禹衛書法行書簡體.')
  doc.font('MFDD')
  .text('禹卫书法行书简体.')
  doc.end();
}
