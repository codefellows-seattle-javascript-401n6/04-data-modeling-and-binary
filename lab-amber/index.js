'use strict';

const Transform = require('./lib/transform.js');
const fs = require('fs');

if (process.argv[2] && process.argv[3] && process.argv[4]) {
  let input = process.argv[2];
  let output = process.argv[3];
  let transformReq = process.argv[4];
  let image = new Transform(input, output);
  switch(transformReq) {
    case "grayscale":
      image.grayscale();
      break;
    case "vintage":
      image.vintage();
      break;
    case "lines":
      image.lines();
      break;
    case "retro":
      image.retro();
      break;
    case "cartoon":
      image.cartoon();
      break;
    case "redblue":
      image.redBlue();
      break;
    case "colorize":
      image.colorize();
      break;
    case "dots":
      image.dots();
      break;
    case "graywallpaper":
      image.grayWallpaper();
      break;
    default:
      console.error('Please select a valid transform method');
      return 
  }
} else {
    console.error('Missing valid argument(s)');
    return undefined;
}