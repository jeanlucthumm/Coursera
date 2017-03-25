var rect = require('./rectangle-1');

function solveRect(w, h) {
    console.log("Solving rect for dimensions: " + w + " X " + h);

    // Check dimensions are correct
    if (w < 0 || h < 0) {
        console.log("Rectangle cannot have negative dimensions");
        return;
    }

    // Output computations
    console.log("Perimeter: " + rect.perimeter(w, h));
    console.log("Area: " + rect.area(w, h));
}

solveRect(2, 5);
solveRect(3, 5);
solveRect(-1, 2);