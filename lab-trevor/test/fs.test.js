'use strict';

const fs = require('../lib/fs.js').fs;
const fs = require('fs')

describe('test inverter function', () =>{
    it('should invert the elements in the array', () =>{
        let arr = [1, 2, 3, 4, 5, 6];
        let expected = [6, 5, 4, 3, 2, 1]
        expect(fs.inverter(arr)).toEqual(expected);
    })
})