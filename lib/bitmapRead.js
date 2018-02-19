'use strict';
 // only required for DOM element



var inputElement =  document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');

function handleFiles(e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.addEventListener("load", 
    processimage, false);
  reader.readAsArrayBuffer(file);
}

function processimage(e) {
  var buffer = e.target.result;
  var bitmap = getBMP(buffer);
  var imageData = convertToImageData(bitmap);
  ctx1.putImageData(imageData, 0, 0);
}