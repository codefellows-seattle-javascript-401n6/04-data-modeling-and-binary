'use strict';

const fs = require('fs');
const transformer = require('./lib/fs.js').transformer
const transformers = require('./lib/transformers').Transformers

let transformType;
let originFile = process.argv[2];
let outputFile = process.argv[3];
switch(process.argv[4]){
    case 'colorTransformer': 
        transformType = transformers.colorTransformer
        break;
    case 'nightvision':
        transformType = transformers.nightvision
        break;
    case 'inverter':
        transformType = transformers.inverter
        break;
    default:
        transformType = transformers.colorTransformer
        break;
}

transformer(originFile,transformType, outputFile);
