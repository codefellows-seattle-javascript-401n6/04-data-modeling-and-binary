'use strict';


if(process.argv.includes('hello')) console.log('world')

const fs = require('fs')

let size;
let type;
let testImg = '../test/blob.bmp';

function transformer(img){
    fs.readFile(img, (err, data) => {
        if(err) return console.log(err)

        const header = {
                headerDetail : {
                    signature: data.slice(0,2).toString(),
                    fileSize: data.readUInt16LE(2),
                    offeset: data.readUInt16LE(10)
                },
                dibHeader : {
                    dibSize: data.readUInt16LE(14),
                    imgWidth: data.readUInt16LE(18),
                    imgHeight: data.readUInt16LE(22),
                    bitsPerPixel: data.readUInt8(28),
                },
                colorTable : {

                },
            }
        const imgData = {
                    numPixels: data.readUInt16LE(18) * data.readUInt16LE(22),
                    pixelData: data.slice(data.readUInt8(10)/ 8, data.readUInt16LE(18) * data.readUInt16LE(22) + data.readUIntLE(data.readUInt8(10)/ 8))
            }
        
            console.log(header.headerDetail)
            console.log(header.dibHeader)
            console.log(imgData)
     })
}
 transformer(testImg)
// let newArr = [];

//         let inverter = function(data){
//             for(let i = 0; i < data.length; i++){
//                 newArr[data.length - i -1] = data[i];
                
//             }
//             console.log(newArr);
//         }
//             inverter(imgData.pixelData)

// let getHeader = function(){
    
    
//     const header = {
//         signature: .readUInt8(0).toString(16),
//         fileSize: .readUInt16(2).toString(16),
//     }
// }
// console.log(getHeader())


// module.exports = {};
// module.exports.transformer = transformer;
