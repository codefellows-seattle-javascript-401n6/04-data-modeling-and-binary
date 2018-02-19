'use strict';
const fs = require('fs');

// 1st step: READ FILE.
fs.readFile('../assets/download.bmp', (err, data) => {
    if (err) return console.log('error');
    const bitmap = {
        header: {
            type: data.slice(0, 2).toString(),
            fileSize: data.slice(2, 6).readUInt16LE(),
            pixelOffset: data.slice(10, 14).readUInt32LE(),
            pixelArray: data.slice(this.pixelOffset),
        },
        dibHeader: {
            headerSize: data.slice(14, 18).readUInt32LE(),
            width: data.slice(18, 22).readUInt32LE(),
            height: data.slice(22, 26).readUInt32LE(),
            color: data.slice(50, 54).readUInt32LE()
        },
        pixelArray: data.slice(10, 14).readUInt32LE(),
    };
    console.log(bitmap);



    //SIGNATURE: 42
    //File Size: 4d 32
    //Reserved 1: 45
    //Reserved 2: 00
    //Offset Pixel Array: 00 00 00 00

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