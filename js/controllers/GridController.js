"use strict";

app.controller("gridController", function() {

  this.lostRobots = [];

  this.gridCoords = {
    x: null,
    y: null
  };

  this.robotInstructions = "";

  this.robotCoords = {
    x: null,
    y: null,
    orientation: null,
    lost: false
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

    for (var i = 0; i < allInstructions.length; i++) {
      if (allInstructions[i] === "F") {
        if (ctlr.robotCoords.orientation === "N") {
          // if cell is on the grid, move north one space
          if (ctlr.robotCoords.y + 1 in ctlr.grid[ctlr.robotCoords.x]) {
            ctlr.robotCoords.y += 1;
          } else if (ctlr.lostRobots.includes(ctlr.stringifyRobotPosition() + "LOST")) {
            console.log('Robot ignored instruction to move off grid at ' + ctlr.stringifyRobotPosition());
          } else { // this robot has been lost
            ctlr.robotCoords.lost = true;
            ctlr.lostRobots.push(ctlr.stringifyRobotPosition());
            break;
          }
        } else if (ctlr.robotCoords.orientation === "S") {
        // if cell is on the grid, move south one space
          if (ctlr.robotCoords.y - 1 in ctlr.grid[ctlr.robotCoords.x]) {
            ctlr.robotCoords.y -= 1;
          } else if (ctlr.lostRobots.includes(ctlr.stringifyRobotPosition() + "LOST")) {
            console.log('Robot ignored instruction to move off grid at ' + ctlr.stringifyRobotPosition());
          } else { // this robot has been lost
            ctlr.robotCoords.lost = true;
            ctlr.lostRobots.push(ctlr.stringifyRobotPosition());
            break;
          }
        } else if (ctlr.robotCoords.orientation === "E") {
          if (ctlr.robotCoords.x + 1 in ctlr.grid) {
            ctlr.robotCoords.x += 1;
          } else if (ctlr.lostRobots.includes(ctlr.stringifyRobotPosition() + "LOST")) {
            console.log('Robot ignored instruction to move off grid at ' + ctlr.stringifyRobotPosition());
          } else {
            ctlr.robotCoords.lost = true;
            ctlr.lostRobots.push(ctlr.stringifyRobotPosition());
            break;
          }
        } else if (ctlr.robotCoords.orientation === "W") {
          if (ctlr.robotCoords.x - 1 in ctlr.grid) {
            ctlr.robotCoords.x -= 1;
          } else if (ctlr.lostRobots.includes(ctlr.stringifyRobotPosition() + "LOST")) {
            console.log('Robot ignored instruction to move off grid at ' + ctlr.stringifyRobotPosition());
          } else {
            ctlr.robotCoords.lost = true;
            ctlr.lostRobots.push(ctlr.stringifyRobotPosition());
            break;
          }
        }
      } else if (allInstructions[i] === "L") {
        if (ctlr.robotCoords.orientation === "N") {
          ctlr.robotCoords.orientation = "W";
        } else if (ctlr.robotCoords.orientation === "S") {
          ctlr.robotCoords.orientation = "E";
        } else if (ctlr.robotCoords.orientation === "E") {
          ctlr.robotCoords.orientation = "N";
        } else if (ctlr.robotCoords.orientation === "W") {
          ctlr.robotCoords.orientation = "S";
        }
      } else if (allInstructions[i] === "R") {
        if (ctlr.robotCoords.orientation === "N") {
          ctlr.robotCoords.orientation = "E";
        } else if (ctlr.robotCoords.orientation === "S") {
          ctlr.robotCoords.orientation = "W";
        } else if (ctlr.robotCoords.orientation === "E") {
          ctlr.robotCoords.orientation = "S";
        } else if (ctlr.robotCoords.orientation === "W") {
          ctlr.robotCoords.orientation = "N";
        }
      }
    };
    console.log(this);
    return this.stringifyRobotPosition();
  };

  this.stringifyRobotPosition = function() {
    this.robotPosition = this.grid[this.robotCoords.x][this.robotCoords.y] + this.robotCoords.orientation;
    return this.robotCoords.lost === true ? this.robotPosition += "LOST" : this.robotPosition;
  };

  this.clearRobot = function() {
    this.robotCoords.x = null;
    this.robotCoords.y = null;
    this.robotCoords.orientation = null;
    this.robotCoords.lost = false;
    this.robotPosition = "";
    this.robotInstructions = "";
  };
});
