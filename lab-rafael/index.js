'use strict';

const args = process.argv;
const transform = require('./lib/getargs').getArgs;

transform(args);
