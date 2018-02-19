'use strict';

const transform = require('../lib/transform').transform;
const readBMP = require('../lib/readbmp').readBMP;
const getArgs = require('../lib/getargs').getArgs;

describe('Invalid arguments should log a helpfull message', () => {
  it('Should throw an error from an invalide command', () => {
    let args = ['node', 'index.js', '/assets/no-file.bmp', '/somewhere', 'aneffect'];
    let result = getArgs(args);
    expect(result).toBe('Error');
  });
});

describe('CLI requires at least three arguments', () => {
  it('Throw error if received less than 3 arguments', () => {
    let args = ['index.js', './test/assets/blob.bmp', './test/assets/newblob.bmp', 'invert'];
    let result = getArgs(args);
    expect(result).toBe('Error');
  });
});

describe('Successfully save an new bitmap after transform', () => {
  it('Should be saved into a new file newblob.bmp', done => {
    let args = ['node', 'index.js', './test/assets/blob.bmp', './test/assets/newblob.bmp', 'invert'];
    let result = getArgs(args);
    let outputData = '';
    expect(outputData).toBe('The file has been saved at ./test/assets/newblob.bmp');
    done();
  });
});
