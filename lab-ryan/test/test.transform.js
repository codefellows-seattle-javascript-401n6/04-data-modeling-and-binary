'use strict';

const Transform = require('../lib/transform.js');
const fs = require('fs');

describe('Tests if source file does NOT exist after methods are run', () => {
  let expected = false;

  it ('Running mirrorTransform should not pass', (resolve, reject) => {
    let result;
    let input = './test/assets/blob.bmp';
    let output = './test/assets/blob1.bmp';
    let image = new Transform(input, output);
    image.mirrorTransform();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/blob1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });
});
