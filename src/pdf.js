export const Pdf = async (doc, getImage) => {
  
  doc.fontSize(25).text('Here ilslkfs some vector graphics...', 100, 80);
  const image = await getImage(require('./assets/images/2.png'))
  console.log('11111');
  console.log(image,'fffff');
  doc.addPage()
  doc.image(image,100,100,{height:100,width:100})
  .text('And here is some wrapped text...', 100, 300)
  doc.end();
}
