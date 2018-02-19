'use strict';

const fs = require('fs');

const transform = {
  readFile: (file, outputFilePath, callback) => {
    fs.readFile(file, (err, buffer) => {
      if (err) return console.error(err);

      const bitmap = {
        header: {
          type: buffer.slice(0, 2).toString(),
          fileSize: buffer.slice(2, 6).readUInt16LE(),
          offsetToPixelArray: buffer.slice(10, 14).readUInt32LE()
        },
        dibHeader: {
          width: buffer.slice(18, 22),
          height: buffer.slice(22, 26),
          bitsPerPixel: buffer.slice(28, 30)
        },
        pixelArray: buffer.slice(buffer.slice(10, 14).readUInt32LE())
      };
      callback(outputFilePath, bitmap, buffer);
    });
  },
  
  invert: (outputFilePath, bitmap, buffer) => {
    let result = [];
    for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
      result.push(bitmap.pixelArray[i]);
    }

    let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + result;

    fs.writeFile(outputFilePath, newBuffer, err => {
      if (err) return console.log(err);
      console.log(`The file has been saved at ${outputFilePath}`);
    });
  }
};


module.exports.transform = transform;