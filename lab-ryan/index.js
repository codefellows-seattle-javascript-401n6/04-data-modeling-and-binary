"use strict";

const fs = require('fs');

fs.readFile('../test/assets/penguin.bmp', (err, data) => {
    if (err) {
        cb(err);
        return;
    }
})