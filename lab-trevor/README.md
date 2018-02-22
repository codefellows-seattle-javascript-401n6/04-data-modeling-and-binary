# BitMap Transformer

The bitmap transformer takes a bitmap and transforms it according to the parameters you define.

The transformer() takes in 3 parameters; an image file path, a transformer function, and and output filepath.

There are three transform type functions which all take in the image data from the transformer function;
nightvision() 
colorTransformer()
inverter()

## Using The Transformer with CLI

In the lab-trevor directory you can use the CLI the following way:
node index.js imagePath outputhImagePath nightvision (or colorTransformer, or Inverter).  After hitting enter the image you used will be duplicated and transformed as the image you indicated in the output path.  