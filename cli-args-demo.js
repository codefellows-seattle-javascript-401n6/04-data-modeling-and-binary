// If you run this program from your terminal and pass in more arguments
// then you can access the arguments as elements in the process.argv array.
//
// node cli-args.js hello /perhaps/a/path/to/some/file
//
// Argument #0 /Users/moonmayor/.nvm/versions/node/v9.3.0/bin/node
// Argument #1 /Users/moonmayor/Fellows/six_n_js/labs_org/04-data-modeling-and-binary/cli-args.js
// Argument #2 hello
// Argument #3 /perhaps/a/path/to/some/file




for (let i = 3; i < process.argv.length; i++) {
  console.log(`Argument #${i}`, process.argv[i])
}
