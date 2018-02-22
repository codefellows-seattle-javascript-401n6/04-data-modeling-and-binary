'use strict';

const fs = require('fs');


const Transformers = {};

Transformers.nightvision = function(imgData){   
    for(let i = 0; i < imgData.colorTable.length; i += 4){
            imgData.colorTable[i] = imgData.colorTable[i] * .2125;
    }
    for(let i = 1; i < imgData.colorTable.length; i += 4){
        imgData.colorTable[i] = imgData.colorTable[i] * .7154;
}
for(let i = 2; i < imgData.colorTable.length; i += 4){
    imgData.colorTable[i] = imgData.colorTable[i] * .0721;
}
    console.log('nightvision')
}
Transformers.colorTransformer = function(imgData){   
    for(let i = 0; i < imgData.colorTable.length; i++){
        if(imgData.colorTable[i] % 2 !== 0 ){
            imgData.colorTable[i] = 0;
        }
    }
   console.log('transformer') 
}
Transformers.inverter = function(imgData){
    for(let i = 0; i < imgData.pixelArr.length; i++){
    imgData.pixelArr[imgData.pixelArr.length - i -1] = imgData.pixelArr[i];
    }
    console.log('inverter')
}

module.exports = {};
module.exports.Transformers = Transformers;