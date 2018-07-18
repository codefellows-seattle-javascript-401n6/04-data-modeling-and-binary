'use strict';

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
     console.log(howTransform)
}

module.exports = {};
module.exports.transformer = transformer;
