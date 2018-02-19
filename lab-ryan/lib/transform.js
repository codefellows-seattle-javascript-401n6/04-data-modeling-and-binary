// 'use strict';
// const fs = require('fs');
// const required = require('../index.js');

// //provides access to node on command line interface (CLI)
// // if(process.argv.includes('hello')) console.log('world');

// function BitmapTransformer(inputFilePath, outputFilePath, transform) {

//     fs.readFile(`${__dirname}/test/assets/penguin.bmp`, (err, buffer) => {
//         if (err) return console.error(err);

//         const bitmap = {

//             header: {
//                 type: buffer.slice(0, 2).toString(),
//                 fileSize: buffer.slice(2, 6).readUInt16LE(),
//                 offsetToPixelArray: buffer.slice(10, 14).readUInt32LE(),
//             },
//             dibHeader: {
//                 width: buffer.slice(18, 22),
//                 height: buffer.slice(22, 26),
//                 bitsPerPixel: buffer.slice(28, 30),
//             },
//             pixelArray: buffer.slice(buffer.slice(10, 14).readUInt32LE()),
//         }
//         console.log('bitmap', bitmap);

//         const mirrorTransform = (transform) => {
//             if (transform !== undefined) {
//                 if (transform === 'mirror') {
//                     let mirrorImage = [];
//                     console.log('bitmap pixel array=', bitmap.pixelArray.length);
//                     for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
//                         mirrorImage.push(bitmap.pixelArray[i]);
//                     }
//                     console.log('buffer=', buffer);

//                     let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + mirrorImage;
//                     return newBuffer;
//                 }
//             }
//         }
//         let newBuffer = mirrorTransform(transform);

//         fs.writeFile(outputFilePath, newBuffer, err => {
//             if (err) return console.log(err)
//         })
//     })
// }
// BitmapTransformer(inputFilePath, outputFilePath, transform);

// module.exports = {};
// module.exports.BitmapTransformer = BitmapTransformer;

// const transform = {
//     readFile: (file, outputFilePath, callback) => {
//         fs.readFile(file, (err, buffer) => {
//             if (err) return console.error(err);

//             callback(outputFilePath, bitmap, buffer);
//         });
//     },

//     greyScale: (outputFilePath, bitmap, buffer) => {
//         let result = [];
//         for (let i = bitmap.pixelArray.length - 1; i > 0; i--) {
//             result.push(bitmap.pixelArray[i]);
//         }

//         let newBuffer = buffer.slice(0, bitmap.offsetToPixelArray) + result;

//         fs.writeFile(outputFilePath, newBuffer, err => {
//             if (err) return console.log(err);
//             console.log(`The file has been saved at ${outputFilePath}`);
//         });
//     }
// };

// module.exports = {};
// module.exports.transform = transform;