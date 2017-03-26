var argv = require("yargs")
  .argv;

var rect = require('./rectangle');

function solveRect(w, h) {
  console.log("Solving rect for dimensions: " + w + " X " + h);

  rect(w, h, function (err, rectangle) {
    if (err) {
      console.log(err);
    } else {
      console.log("Perimeter: " + rectangle.perimeter());
      console.log("Area: " + rectangle.area());
    }
  });
}

solveRect(argv.w, argv.h);
