'use strict';

const Transform = require('../lib/transform.js');

describe('Test for null input', () => {
  let expected = undefined;
  it ('An empty array should be returned', (resolve, reject) => {
    let originalFile = './assets/flower2.bmp';
    let image = new Transform(originalFile, './assets/flower3.bmp')
    let result = Transform.gray(filePathArray, (err, results) => {
      expect(results).toEqual(expected);
      resolve();
    })
  })
});

//grayWallpaper
//dots
//colorize
//redBlue
//cartoon
//retro
//lines
//vintage
//grayscale