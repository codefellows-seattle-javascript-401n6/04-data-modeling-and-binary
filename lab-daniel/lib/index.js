'use strict';
const fs = require('fs');

// 1st step: READ FILE.
fs.readFile('../assets/download 2.bmp', (err, data) => {
    if (err) return console.log('error');
    console.log(data);
    const bitmap = {
        header: {
            type: data.slice(0, 2).toString(),
            fileSize: data.slice(2, 6).readUInt16LE(2)
        }
    };
    console.log(bitmap.header);

    // let str = data.toString('utf8', 0, 2);
    // console.log('String:', str);

    // let size = data.readUInt8('utf8', 2, 4);
    // console.log('Size:', size);
});



//`${__dirname}`

//NOTE compare the wiki Structure Image to code. ie:
// [00 02 4d 5w 00 00 00 00 84 45 00 00]
// [00 02 4d 5w] ===

//ALWAYS use UInt buffer for this project. 