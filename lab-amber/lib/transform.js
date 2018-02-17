'use strict';

const fs = require('fs');

class Transform {
  constructor(inFile, outFile, transform) {
    this.inFile = inFile;
    this.outFile = outFile;
  }
  toBinary(callback) {
    fs.readFile(this.inFile, (err, buffer) => {
      if (err) {
        console.error(err);
        process.exit();
      }
      callback(buffer);
    })
  }
  grayWallpaper() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      newBuffer[28] = '24'; //bits per pixel
      newBuffer.toString();
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  dots() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 41; i < newBuffer.length; i = i + 30) {
        newBuffer[i] = '00';
      }
      newBuffer.toString();
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  colorize() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 41; i < newBuffer.length; i++) {
        if (newBuffer[i] > 99) {
          newBuffer[i] = '00';
        } else {
          newBuffer[i] = '90';
        }
      }
      newBuffer.toString();
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  redBlue() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 0; i < newBuffer.length / 2; i++) {
        newBuffer[i + 41] = newBuffer[newBuffer.length - i];
      }
      for (var i = 0; i < newBuffer.length; i++) {
        newBuffer[i + newBuffer.length / 2] = newBuffer[newBuffer.length / 2 - i];
      }
      newBuffer.toString();
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  cartoon() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 41; i < buffer.length; i++) {
        if (newBuffer[i] > 200) {
          newBuffer[i] = '250';
        } else if (newBuffer[i] < 100) {
          newBuffer[i] = '000';
        } else {
          newBuffer[i] = '150';
        }
      }
      newBuffer.toString();
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  retro() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 41; i < buffer.length; i++) {
        if ((newBuffer[i] - newBuffer[i + 1]) <= 50, i = i + 2) {
          newBuffer[i] = newBuffer[i + 1];
        }
      }
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  lines() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 41; i < buffer.length; i = i + 10) {
        if ((newBuffer[i] - newBuffer[i + 1]) <= 50) {
          newBuffer[i] = newBuffer[i + 1];
        }
      }
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  vintage() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 41; i < buffer.length; i = i + 3) {
        let newValue = Math.floor((buffer[i] + buffer[i + 1] + buffer[i + 2]) / 3);
        buffer[i] = newValue;
        buffer[i + 1] = newValue;
        buffer[i + 2] = newValue;
      }
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
  grayscale() {
    this.toBinary(buffer => {
      let newBuffer = buffer;
      for (var i = 41; i < buffer.length; i = i + 5) {
        let newValue = Math.floor((buffer[i] + buffer[i + 1] + buffer[i + 2] + buffer[i + 3] + buffer[i + 4]) / 5);
        buffer[i] = newValue;
        buffer[i + 1] = newValue;
        buffer[i + 2] = newValue;
        buffer[i + 3] = newValue;
        buffer[i + 4] = newValue;
        buffer[i + 5] = newValue;
      }
      fs.writeFile(this.outFile, newBuffer, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('success!');
        }
      });
    });
  }
}

// runAll() {
//   for (let i = 0; i < 9; i++) {
//     let image = new Transform('../test/assets/salad3.bmp', '../test/assets/salad1.bmp');
//   }
// }

// let image = new Transform('../test/assets/salad3.bmp', '../test/assets/salad1.bmp');

// image.grayWallpaper();

//grayWallpaper
//dots
//colorize
//redBlue
//cartoon
//retro
//lines
//vintage
//grayscale