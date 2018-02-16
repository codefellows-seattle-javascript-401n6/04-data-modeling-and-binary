'use strict';

const fs = require('fs');
const readline = require('readline');

// const rl = readline.createInterface({
//   input: fs.createReadStream('sample.txt'),
//   crlfDelay: Infinity
// });

// rl.on('line', (line) => {
//   console.log(`Line from file: ${line}`);
// });

process.argv((arg) => {
  console.log(arg);
});
