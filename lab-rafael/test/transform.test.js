'use strict';

const transform = require('../lib/transform').transform.readFile;
const readBMP = require('../lib/readbmp').readBMP;

test('Invalid arguments should log a helpfull message', done => {
  let command = 'aneffect';
  let file = '/assets/no-file.bmp';
  let outputFilePath = '/somewhere';
  let error = false;

  function callback(err, outputFilePath, bitmap, buffer) {
    if (err) {
      error = true;
      expect(error).toEqual(true);
      done();
    }
  };
  readBMP(file, outputFilePath, callback);
});
