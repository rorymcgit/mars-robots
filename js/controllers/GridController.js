app.controller("gridController", function() {
  this.coords = {
    x: "",
    y: ""
  };

  this.createGrid = function() {
    console.log("Coordinates are:", this.coords);

    var cols = parseInt(this.coords["x"]) + 1; // add 1 for zero
    var rows = parseInt(this.coords["y"]) + 1; // add 1 for zero

    console.log("cols (x) =", cols);
    console.log("rows (y) =", rows);

    var grid = new Array(cols);

    for(var i = 0; i < cols; i++) {
      grid[i] = [];
      for(var j = 0; j < rows; j++) {
        grid[i][j] = j;
      }
    }
    console.log(grid);

    return grid;
  };
});
