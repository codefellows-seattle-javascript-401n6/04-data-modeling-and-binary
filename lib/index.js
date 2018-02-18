'use strict'

const fs = require('fs');

// console.log(process.argv);
// if(process.argv.includes('hello')) console.log('world');
// this will help you check the user's input or something idk

fs.readFile(`../assets/duck.bmp`, (err,buffer) =>{
    if(err) return console.log(err)
    let newBuffer = buffer;
    for (var i = 54; i < newBuffer.length; i = i + 100) {
      newBuffer[i] = '00';
    }
    newBuffer.toString();
    fs.writeFile(`../assets/output.bmp`, newBuffer,(err) =>{
        if(err) throw err;
    })
})



// fs.readFile(`../assets/duck.bmp`, (err,data) =>{
//     if(err) return console.log(err)

//     const bitmapOfSomething = {
//         header: {
//             type: data.slice(0,2).toString(),
//             fileSize: data.slice(2,6).readUInt16LE(),
//             fileOffsetPixelArray: data.slice(10,14).readUInt32LE()
//                //54// 
//         },
//         dibHeader : {
//             width: data.slice(18,22).readUInt32LE(),
//             //500//
//             height: data.slice(22,26).readUInt32LE(),
//             //546//
//             colorPlanels: data.slice(26,28).readUInt16LE(),
//             //1//
//             bitPerPixle: data.slice(28,30).readUInt16LE(),
//             //24//
//             imageSize: data.slice(34,38).readUInt32LE()
//         }
//     };

//     console.log(bitmapOfSomething.dibHeader.bitPerPixle)
// })


// module.exports.bitParse = bitParse;