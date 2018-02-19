'use strict';

const fs = require('fs');

const transform = {
  
  writeFile: (outputFilePath, newBuffer, err) => {
    fs.writeFile(outputFilePath, newBuffer, err => {
      if (err) throw err;
      console.log(`The file has been saved at ${outputFilePath}`);
      return 'Success';
    });
  },

  invert: (err, outputFilePath, bitmap, buffer) => {
    if (err) {
      throw err;
    }

    let result = [];
    for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
      result.push(bitmap.pixelArray[i]);
    }

    let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + result;

    transform.writeFile(outputFilePath, newBuffer, err);
  },

  greyScale: (err, outputFilePath, bitmap, buffer) => {
    if (err) {
      throw err;
    }

    let result = [];
    for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
      result.push(bitmap.pixelArray[i]);
    }

    let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + result;

    transform.writeFile(outputFilePath, newBuffer, err); 
  },

  vintage: (err, outputFilePath, bitmap, buffer) => {
    if (err) {
      throw err;
    }

    let result = [];
    for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
      result.push(bitmap.pixelArray[i]);
    }

    let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + result;

    transform.writeFile(outputFilePath, newBuffer, err);
  },

  pixelate: (err, outputFilePath, bitmap, buffer) => {
    if (err) {
      throw err;
    }

    let result = [];
    for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
      result.push(bitmap.pixelArray[i]);
    }

    let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + result;

    transform.writeFile(outputFilePath, newBuffer, err);
  }
};

module.exports.transform = transform;