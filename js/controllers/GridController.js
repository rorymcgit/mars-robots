"use strict";

app.controller("gridController", function() {
  this.robotInstructions = "";

  this.gridCoords = {
    x: null,
    y: null
  };

  this.robotCoords = {
    x: null,
    y: null,
    orientation: null
  }

  this.createGrid = function() {
    console.log("Grid Size Coordinates:", this.gridCoords);

    var cols = parseInt(this.gridCoords.x) + 1; // add 1 for zero column
    var rows = parseInt(this.gridCoords.y) + 1; // add 1 for zero row

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

  this.moveRobot = function() {
    var allInstructions = this.robotInstructions.split("");
    var ctlr = this;

    allInstructions.forEach(function(move) {
      if (move === "F") {
        if (ctlr.robotCoords.orientation === "N") {
          ctlr.robotCoords.y + 1 in ctlr.grid[ctlr.robotCoords.x] ? ctlr.robotCoords.y += 1 : ctlr.lost = true;
        }
        else if (ctlr.robotCoords.orientation === "S") {
          ctlr.robotCoords.y - 1 in ctlr.grid[ctlr.robotCoords.x] ? ctlr.robotCoords.y -= 1 : ctlr.lost = true;
        }
        else if (ctlr.robotCoords.orientation === "E") {
          ctlr.robotCoords.x + 1 in ctlr.grid ? ctlr.robotCoords.x += 1 : ctlr.lost = true;
        }
        else if (ctlr.robotCoords.orientation === "W") {
          ctlr.robotCoords.x - 1 in ctlr.grid ? ctlr.robotCoords.x -= 1 : ctlr.lost = true;
        }
      }
      else if (move === "R") {
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
      else if (move === "L") {
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
    console.log(this)
    console.log(this.stringifyRobotPosition());
    return(this.stringifyRobotPosition());
  };

  this.stringifyRobotPosition = function() {
    this.robotPosition = this.grid[this.robotCoords.x][this.robotCoords.y] + this.robotCoords.orientation;
    return this.lost === true ? this.robotPosition += "LOST" : this.robotPosition;
  };

  this.clearRobot = function() {
    this.robotCoords.x = null;
    this.robotCoords.y = null;
    this.robotCoords.orientation = null;
    this.robotPosition = "";
    this.robotInstructions = "";
    this.lost = null;
  };
});
