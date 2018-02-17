'use strict'

const fs = require('fs');
const bitmap = fs.readFileSync(`../assets/duck.bmp`);
// read file sync will retrun a buffer//
const bmp = {}

// 2 modules one for reading a bitmap and one for creating one//
 console.log(bitmap);
