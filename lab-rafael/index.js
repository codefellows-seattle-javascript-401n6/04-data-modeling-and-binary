'use strict';

const args = process.argv;
const file = args[2];
const outputFilePath = args[3];
const command = args[4];
const transform = require('./lib/getargs').getArgs;

transform(file, outputFilePath, command);
