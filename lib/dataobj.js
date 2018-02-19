'use strict';

var canvas1 = document.getElementById('canvas1'); 
var ctx1 = canvas1.getContext('2d');

let data = imageData.data;
let bmpdata = bitmap.pixels; 
let stride = bitmap.stride;

function convertToImageData(bitmap) { 
  canvas = document.createElement("canvas"); 
 let ctx = canvas.getContext("2d"); 
 let Width = bitmap.infoheader.biWidth; 
 let Height = bitmap.infoheader.biHeight; 
 let imageData = ctx.createImageData(
                            Width, Height);
  };

  for (var y = 0; y < Height; ++y) { 
    for (var x = 0; x < Width; ++x) { 
     var index1 = (x+Width*(Height-y))*4; 
     var index2 = x * 3 + stride * y;
     data[index1] = bmpdata[index2 + 2];
     data[index1 + 1] = bmpdata[index2 + 1];
     data[index1 + 2] = bmpdata[index2];
     data[index1 + 3] = 255; 
    } 
   }



   ctx1.putImageData(imageData, 0, 0);

   return imageData;

  };

