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
    var cols = parseInt(this.gridCoords.x) + 1; // add 1 for zero column
    var rows = parseInt(this.gridCoords.y) + 1; // add 1 for zero row
    var grid = new Array(cols);

    for(var i = 0; i < cols; i++) {
      grid[i] = [];
      for(var j = 0; j < rows; j++) {
        grid[i][j] = String(i) + String(j);
      }
    }
    this.grid = grid;
    return this.grid;
  };

  this.returnRobotPosition = function() {
    this.robotPosition = this.grid[this.robotCoords.x][this.robotCoords.y] + this.robotCoords.orientation;
    return this.robotCoords.lost === true ? this.robotPosition += "LOST" : this.robotPosition;
  };

  this.lostRobot = function() {
    this.lostRobots.push(this.returnRobotPosition());
    this.robotCoords.lost = true;
  }

  this.lostRobotAtThisMove = function() {
    return this.lostRobots.includes(this.returnRobotPosition());
  }

  this.IgnoreMoveDueToLostRobotScent = function() {
    console.log('Robot ignored instruction to move off grid at ' + this.returnRobotPosition());
  }

  this.clearRobot = function() {
    this.robotCoords.x = null;
    this.robotCoords.y = null;
    this.robotCoords.orientation = null;
    this.robotCoords.lost = false;
    this.robotPosition = "";
    this.robotInstructions = "";
  };

  this.moveRobot = function() {
    var allInstructions = this.robotInstructions.split("");

    for (var i = 0; i < allInstructions.length; i++) {
      if (allInstructions[i] === "F") {
        if (this.robotCoords.orientation === "N") {
          // if cell is on the grid, move north one space
          if (this.robotCoords.y + 1 in this.grid[this.robotCoords.x]) {
            this.robotCoords.y += 1;
          } else if (this.lostRobotAtThisMove()) {
            this.IgnoreMoveDueToLostRobotScent();
          } else {
            this.lostRobot();
            break;
          }
        } else if (this.robotCoords.orientation === "S") {
          if (this.robotCoords.y - 1 in this.grid[this.robotCoords.x]) {
            this.robotCoords.y -= 1;
          } else if (this.lostRobotAtThisMove()) {
            this.IgnoreMoveDueToLostRobotScent();
          } else {
            this.lostRobot();
            break;
          }
        } else if (this.robotCoords.orientation === "E") {
          if (this.robotCoords.x + 1 in this.grid) {
            this.robotCoords.x += 1;
          } else if (this.lostRobotAtThisMove()) {
            this.IgnoreMoveDueToLostRobotScent();
          } else {
            this.lostRobot();
            break;
          }
        } else if (this.robotCoords.orientation === "W") {
          if (this.robotCoords.x - 1 in this.grid) {
            this.robotCoords.x -= 1;
          } else if (this.lostRobotAtThisMove()) {
            this.IgnoreMoveDueToLostRobotScent();
          } else {
            this.lostRobot();
            break;
          }
        }
      } else if (allInstructions[i] === "L") {
        if (this.robotCoords.orientation === "N") {
          this.robotCoords.orientation = "W";
        } else if (this.robotCoords.orientation === "S") {
          this.robotCoords.orientation = "E";
        } else if (this.robotCoords.orientation === "E") {
          this.robotCoords.orientation = "N";
        } else if (this.robotCoords.orientation === "W") {
          this.robotCoords.orientation = "S";
        }
      } else if (allInstructions[i] === "R") {
        if (this.robotCoords.orientation === "N") {
          this.robotCoords.orientation = "E";
        } else if (this.robotCoords.orientation === "S") {
          this.robotCoords.orientation = "W";
        } else if (this.robotCoords.orientation === "E") {
          this.robotCoords.orientation = "S";
        } else if (this.robotCoords.orientation === "W") {
          this.robotCoords.orientation = "N";
        }
      }
    };
    return this.returnRobotPosition();
  };
});
