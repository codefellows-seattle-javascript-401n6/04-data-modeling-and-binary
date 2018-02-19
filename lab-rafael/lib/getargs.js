'use strict';

const transform = require('./transform').transform; 
const readBMP = require('./readbmp').readBMP;

let getArgs = (file, outputFilePath, command) => {
  switch (command) {
    case 'invert':
      readBMP(file, outputFilePath, transform.invert);
      break;
    case 'vintage':
      readBMP(file, outputFilePath);
      break;
    case 'random':
      readBMP(file, outputFilePath);
      break;
    case 'pexelate':
      readBMP(file, outputFilePath);
      break;
    default:
      console.log('Invalid transform option please try again.');
  }
};

module.exports.getArgs = getArgs;