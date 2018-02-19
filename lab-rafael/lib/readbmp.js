const fs = require('fs');

let readBMP = (file, outputFilePath, callback) => {
  fs.readFile(file, (err, buffer) => {
    if (err) {
      callback(err);
    }

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

    callback(null, outputFilePath, bitmap, buffer);
  });
};

module.exports.readBMP = readBMP;
