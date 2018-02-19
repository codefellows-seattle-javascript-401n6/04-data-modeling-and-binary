'use strict';


// if(process.argv.includes('transform1')) transformer(testImg,transformer, '../test/output.bmp');
// if(process.argv.includes('transform2')) transformer(testImg,transformer2, '../test/output.bmp');
// if(process.argv.includes('transform3')) transformer(testImg,inverter, '../test/output.bmp');
let colorTransformer = function(imgData){   
    for(let i = 0; i < imgData.colorTable.length; i++){
        if(imgData.colorTable[i] % 2 !== 0 ){
            imgData.colorTable[i] = 0;
        }
    }
    
}
let colorTransformer2 = function(imgData){   
    for(let i = 0; i < imgData.colorTable.length; i++){
        if(imgData.colorTable[i] % 2 !== 0 ){
            imgData.colorTable[i] = 90;
        }
    }
    
}
let inverter = function(imgData){
    for(let i = 0; i < imgData.pixelArr.length; i++){
    imgData.pixelArr[imgData.pixelArr.length - i -1] = imgData.pixelArr[i];
    }
}

let transformType;
let originFile = process.argv[2];
let outputFile = process.argv[3];
switch(process.argv[4]){
    case 'colorTransformer': 
        transformType = colorTransformer
    case 'colorTransformer2':
        transformType = colorTransformer2
    case 'inverter':
        transformType = inverter
    default:
        transformType = colorTransformer
}

const fs = require('fs')

let testImg = '../test/blob.bmp';


function transformer(img, howTransform, output){
    fs.readFile(img, (err, data) => {
        if(err) return console.log(err)

        const imgData = {
                headerDetail : data.slice(0,13),
                dibHeader : data.slice(14,53),
                colorTable : data.slice(54,1077),
                pixelArr : data.slice(1078), 
            }
        howTransform(imgData);
        fs.writeFile(output,data, (err, data) => {
            if(err) return console.log(err)
        
        })
     })
}



 transformer(originFile,transformType, outputFile);
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
