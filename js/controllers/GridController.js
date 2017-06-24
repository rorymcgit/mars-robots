"use strict";

app.controller("gridController", function() {
  this.gridCoords = {
    x: "",
    y: ""
  };

  this.roboStartCoords = {
    x: "",
    y: ""
  }

  this.createGrid = function() {
    console.log("Grid Size Coordinates:", this.gridCoords);

    var cols = parseInt(this.gridCoords["x"]) + 1; // add 1 for zero
    var rows = parseInt(this.gridCoords["y"]) + 1; // add 1 for zero

    console.log("cols (x) =", cols);
    console.log("rows (y) =", rows);

    var grid = new Array(cols);

    for(var i = 0; i < cols; i++) {
      grid[i] = [];
      for(var j = 0; j < rows; j++) {
        grid[i][j] = String(i) + String(j);
      }
    }
    this.grid = grid;
    console.log(this.grid);

    return this.grid;
  };

  this.placeRobot = function() {
    this.robotPosition = this.grid[this.roboStartCoords["x"]][this.roboStartCoords["y"]];
    return this.robotPosition;
  };
});
