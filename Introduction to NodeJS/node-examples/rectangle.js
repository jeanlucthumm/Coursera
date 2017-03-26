module.exports = function (x, y, callback) {
  // Check that dimensions are in bounds
  if (x < 0 || y < 0) {
    callback(new Error("Rectangle cannot have negative dimensions"), null);
    return;
  }

  // Return a new rectangle object
  callback(null, {
    perimeter: function () {
      return 2 * (x + y);
    },

    area: function () {
      return x * y;
    }
  });
};
