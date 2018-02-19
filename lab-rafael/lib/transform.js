'use strict';

const fs = require('fs');

const transform = {
  invert: (err, outputFilePath, bitmap, buffer) => {
    if (err) {
      throw err;
    }

    let result = [];
    for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
      result.push(bitmap.pixelArray[i]);
    }

    let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + result;

    fs.writeFile(outputFilePath, newBuffer, err => {
      if (err) return console.log(err);
      console.log(`The file has been saved at ${outputFilePath}`);
    });
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

    fs.writeFile(outputFilePath, newBuffer, err => {
      if (err) return console.log(err);
      console.log(`The file has been saved at ${outputFilePath}`);
    });
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

    fs.writeFile(outputFilePath, newBuffer, err => {
      if (err) return console.log(err);
      console.log(`The file has been saved at ${outputFilePath}`);
    });
  },

  something: (err, outputFilePath, bitmap, buffer) => {
    if (err) {
      throw err;
    }

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