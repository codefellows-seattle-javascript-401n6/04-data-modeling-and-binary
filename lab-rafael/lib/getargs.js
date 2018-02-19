'use strict';

const transform = require('./transform').transform; 
const readBMP = require('./readbmp').readBMP;

let getArgs = (args) => {
  if (args.length < 5) {
    console.log('Please enter at least 3 arguments');
    return 'Error';
  }
  const file = args[2];
  const outputFilePath = args[3];
  const command = args[4];

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
      return 'Error';
  }
};

module.exports.getArgs = getArgs;