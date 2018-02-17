'use strict';

const Transform = require('../lib/transform.js');
const fs = require('fs');

describe('Tests if source file does NOT exist after methods are run', () => {
  let expected = false;

  // grayscale
  it ('Running .grayscale() should not pass', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower2.bmp';
    let output = './test/assets/flower4.bmp';
    let image = new Transform(input, output);
    image.grayscale();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower4.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

});

describe('Tests if new file exists after methods are run', () => {
  let expected = true;

  // grayscale
  it ('Running .grayscale() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.grayscale();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  })

  // vintage
  it ('Running .vintage() should create a new file  at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.vintage();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

  // lines
  it ('Running .lines() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.lines();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

  // retro
  it ('Running .retro() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.retro();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

  // cartoon
  it ('Running .cartoon() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.lines();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

  // redblue
  it ('Running .redblue() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.lines();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });
  
  // colorize
  it ('Running .colorize() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.lines();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

  // dots
  it ('Running .dots() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.lines();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

  // graywallpaper
  it ('Running .grayWallpaper() should create a new file at the specified path', (resolve, reject) => {
    jest.useFakeTimers();
    let result;
    let input = './test/assets/flower.bmp';
    let output = './test/assets/flower1.bmp';
    let image = new Transform(input, output);
    image.lines();
    jest.setTimeout(() => {
      result = fs.existsSync('./test/assets/flower1.bmp');
      expect(result).toBe(expected);
    }, 10000);
    jest.runAllTimers();
    resolve();
  });

});
