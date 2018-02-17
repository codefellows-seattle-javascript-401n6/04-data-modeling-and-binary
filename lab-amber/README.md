# Amber Kim Bitmap CLI Bitmap Transformer App

## Running This CLI in node:
* Fork then clone this repo into your local machine 
* Navigate to the appropriate app folder where the index.js file for this app exists
* Choose a .bmp file to transform
* Your command in your terminal should look something like this:
```
node index.js <source bmp file> <output bmp file> <transform method name>
```
Here is an example CLI call:
```
node index.js ./test/assets/salad.bmp ./test/assets/salad1.bmp grayscale
```
* If you do not specify a valid source or source path, a new, broken file will be created and you will get an error. Delete this file and try again with a valid source.
* If you do not input a valid method, you will also get an error.

## Available Transform Methods:
* grayscale
* vintage
* lines
* retro
* cartoon
* redblue
* colorize
* dots
* graywallpaper