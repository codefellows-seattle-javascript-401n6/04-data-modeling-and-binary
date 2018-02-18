"use strict";
const fs = require('fs');

//provides access to node on command line interface (CLI)
// if(process.argv.includes('hello')) console.log('world');

const trasnform = require('../index.js');

let transform = () => {
    for(let i = 54; i < data.length; i = i+50){
        data[i] = '255';
    }
    console.log('transform', data[54]);
}
transform();

fs.writeFile(`${__dirname}/test/assets/penguin1.bmp`, data, function(err) {
    if (err) {
        console.log(err)
    }
        console.log('success')
})

module.exports = {};
module.exports.transform = transform;