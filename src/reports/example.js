function Example () {

}

Example.editPdf = async (doc) => {
  doc
  .editPage(8)
  .text('324234324',100,100)
  .endPage()
}

module.exports = Example