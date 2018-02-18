'use strict';

const transform = require('./lib/transform').transform.readFile;
const effect = require('./lib/transform').transform; 
const args = process.argv;

let file = args[2];
let outputFilePath = args[3];
let command = args[4] || null;

switch (command) {
  case 'invert':
    transform(file, outputFilePath, effect.greyScale);
    break;
  case 'vintage':
    transform(file, outputFilePath);
    break;
  case 'random':
    transform(file, outputFilePath);
    break;
  case 'pixelate':
    transform(file, outputFilePath);
    break;
}