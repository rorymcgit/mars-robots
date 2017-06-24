"use strict";

app.controller("gridController", function() {
  this.gridCoords = {
    x: null,
    y: null
  };

  this.robotCoords = {
    x: null,
    y: null,
    orientation: null
  }

  this.robotInstructions = "";

  this.createGrid = function() {
    console.log("Grid Size Coordinates:", this.gridCoords);

    var cols = parseInt(this.gridCoords.x) + 1; // add 1 for zero
    var rows = parseInt(this.gridCoords.y) + 1; // add 1 for zero

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

  this.stringifyRobotPosition = function() {
    console.log(this);
    this.robotPosition = this.grid[this.robotCoords.x][this.robotCoords.y] + this.robotCoords.orientation;
    return this.robotPosition;
  };

  this.moveRobot = function() {
    console.log(this.robotInstructions);
    var allInstructions = this.robotInstructions.split("");
    var ctlr = this;
    console.log(allInstructions);
    allInstructions.forEach(function(instruct) {
      if (instruct === "F") {
        if (ctlr.robotCoords.orientation === "N") {
          ctlr.robotCoords.y += 1;
        }
        else if (ctlr.robotCoords.orientation === "S") {
          ctlr.robotCoords.y -= 1;
        }
        else if (ctlr.robotCoords.orientation === "E") {
          ctlr.robotCoords.x += 1;
        }
        else if (ctlr.robotCoords.orientation === "W") {
          ctlr.robotCoords.x -= 1;
        }
      }
      else if (instruct === "R") {
        if (ctlr.robotCoords.orientation === "N") {
          ctlr.robotCoords.orientation = "E";
        }
        else if (ctlr.robotCoords.orientation === "S") {
          ctlr.robotCoords.orientation = "W";
        }
        else if (ctlr.robotCoords.orientation === "E") {
          ctlr.robotCoords.orientation = "S";
        }
        else if (ctlr.robotCoords.orientation === "W") {
          ctlr.robotCoords.orientation = "N";
        }
      }
      else if (instruct === "L") {
        if (ctlr.robotCoords.orientation === "N") {
          ctlr.robotCoords.orientation = "W";
        }
        else if (ctlr.robotCoords.orientation === "S") {
          ctlr.robotCoords.orientation = "E";
        }
        else if (ctlr.robotCoords.orientation === "E") {
          ctlr.robotCoords.orientation = "N";
        }
        else if (ctlr.robotCoords.orientation === "W") {
          ctlr.robotCoords.orientation = "S";
        }
      }
    });
    return(this.stringifyRobotPosition());
  };
});
