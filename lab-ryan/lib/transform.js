'use strict';
const fs = require('fs');

//provides access to node on command line interface (CLI)
// if(process.argv.includes('hello')) console.log('world');

const required = require('../index.js');

let transform = () => {
    for(let i = 54; i < data.length; i = i+50){
        data[i] = '255';
    }
    console.log('transform', data[54]);
}
transform();

fs.writeFile(`${__dirname}/test/assets/penguin1.bmp`, data, function(err) {
    if (err) {
        console.log(err)
    }
        console.log('success')
})

module.exports = {};
module.exports.transform = transform;

//////////////////////

'use strict';

const fs = require('fs');

const transform = {
  readFile: (file, outputFilePath, callback) => {
    fs.readFile(file, (err, buffer) => {
      if (err) return console.error(err);

      callback(outputFilePath, bitmap, buffer);
    });
  },
  
  greyScale: (outputFilePath, bitmap, buffer) => {
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

module.exports = {};
module.exports.transform = transform;
