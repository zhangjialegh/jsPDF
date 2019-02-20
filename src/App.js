
import React, { Component } from 'react'
import blobStream from 'blob-stream'
import PDFDocument from 'pdfkit'
import Jimp from 'jimp'
import {Pdf} from './pdf'

const getImage = async (uri) => {
  const res = await Jimp.read(uri)
  return new Promise((resolve,reject) => {
    res.getBuffer(Jimp.MIME_PNG,(err, re) => {
      if(err) {
        reject(err)
      } else {
        resolve(re)
      }
    })
  })
}
class App extends Component {
  componentDidMount() {
    const doc = new PDFDocument();
    const stream = doc.pipe(blobStream())
    Pdf(doc, getImage)
    // end and display the document in the iframe to the right
    const iframe = this.refs.iframe
    stream.on('finish', function() {
      iframe.src = stream.toBlobURL('application/pdf');
    });
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <iframe width="100%" height="775" ref="iframe"></iframe>
        <canvas ref="canvas" height='1'></canvas>
      </div>
    );
  }
}

export default App;
