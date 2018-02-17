"use strict";

const fs = require('fs');

if(process.argv.includes('hello')) console.log('world');

fs.readFile('./test/assets/penguin.bmp', (err, data) => {
    if (err) console.log (err);
     console.log(data);
    
    let str = data.readInt8(utf8, 0, 2);
    console.log(str);
})