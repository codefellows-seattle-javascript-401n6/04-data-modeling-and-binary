"use strict";

const fs = require('fs');
const trasnform = require('../lib/transform.js');
//provides access to node on command line interface (CLI)
// if(process.argv.includes('hello')) console.log('world');

fs.readFile(`${__dirname}/test/assets/penguin.bmp`, (err, data) => {
    if (err) console.log (err);
    // console.log('data ', data);
    
    let bitMap = {
        header: {
            type: data.slice(0,2).toString(),
            fileSize: data.slice(2,6).readUInt16LE(),
            fileOffset: data.slice(10, 14).readUInt32LE(),
        },
        dibHeader: {
            width: data.slice(18,22).readUInt32LE(),
            height: data.slice(22,26).readUInt32LE(),
            bitsPerPX: data.slice(28,30).readUInt16LE(),
        },
         pixelArray: data.slice(54).readUInt16LE(),
    }
        // console.log('type ', bitMap.header.type);
        // console.log('fileSize ', bitMap.header.fileSize);
        // console.log('fileOffset ', bitMap.header.fileOffset);
        // console.log('width ', bitMap.dibHeader.width);
        // console.log('height ', bitMap.dibHeader.height);
        // console.log('bits per PX ', bitMap.dibHeader.bitsPerPX);
        // console.log('pixelArray ', bitMap.pixelArray);
        // console.log('data ', data[10]);
});

module.exports = {};
module.exports.bitMap = bitMap;