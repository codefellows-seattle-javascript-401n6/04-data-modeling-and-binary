'use strict';


if(process.argv.includes('hello')) console.log('world')

const fs = require('fs')

let testImg = '../test/blob.bmp';

function transformer(img){
    fs.readFile(img, (err, data) => {
        if(err) return console.log(err)

        const imgData = {
                headerDetail : data.slice(0,13),
                dibHeader : data.slice(14,53),
                colorTable : data.slice(54,1077),
                pixelArr : data.slice(1078), 
            }
            
        for(let i = 0; i < imgData.colorTable.length; i++){
            if(imgData.colorTable[i] % 2 !== 0 ){
                imgData.colorTable[i] = 0;
            }
        }
        console.log(imgData)
        fs.writeFile('../test/output.bmp',data, (err, data) => {
            if(err) return console.log(err)
        
        })
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
