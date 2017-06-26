"use strict";

describe("Robot instructions", function() {
  var gridController;

  beforeEach(function(){
    module("marsRobots");

    inject(function($controller) {
      gridController = $controller("gridController");
      gridController.gridCoords.x = "5";
      gridController.gridCoords.y = "3";
      gridController.createGrid();
      gridController.robotCoords.x = 3;
      gridController.robotCoords.y = 2;
      gridController.robotCoords.orientation = "N";
    });
  });

  it("robot instructions is empty string as default", function() {
    expect(gridController.robotInstructions).toEqual("");
  });

  it("provides a single move instruction and receives the robot's final position", function() {
    gridController.robotInstructions = "F";
    expect(gridController.moveRobot()).toEqual("33N");
    expect(gridController.robotPosition).toEqual("33N");
  });

  it("provides complex move instructions and receives the robot's final position", function() {
    gridController.robotInstructions = "RFFRFRFFLFRRFFLFL";
    expect(gridController.moveRobot()).toEqual("22S");
    expect(gridController.robotPosition).toEqual("22S");
  });

  describe("reporting a lost robot", function() {
    it("returns the position a robot was lost at moving north", function() {
      gridController.robotInstructions = "FF";
      expect(gridController.moveRobot()).toEqual("33NLOST");
    });

    it("returns the position a robot was lost at moving south", function() {
      gridController.robotInstructions = "LLFFF";
      expect(gridController.moveRobot()).toEqual("30SLOST");
    });

    it("returns the position a robot was lost at moving east", function() {
      gridController.robotInstructions = "RFFF";
      expect(gridController.moveRobot()).toEqual("52ELOST");
    });

    it("returns the position a robot was lost at moving west", function() {
      gridController.robotInstructions = "LFFFF";
      expect(gridController.moveRobot()).toEqual("02WLOST");
    });
  });

  describe("lost robots stay lost, don't follow any more instructions", function() {
    it("doesn't follow further instructions when lost moving north", function() {
      gridController.robotInstructions = "FFR";
      expect(gridController.moveRobot()).toEqual("33NLOST");
    });

    it("doesn't follow further instructions when lost moving south", function() {
      gridController.robotInstructions = "LLFFFRRR";
      expect(gridController.moveRobot()).toEqual("30SLOST");
    });

    it("doesn't follow further instructions when lost moving east", function() {
      gridController.robotInstructions = "RFFFRLFR";
      expect(gridController.moveRobot()).toEqual("52ELOST");
    });

    it("doesn't follow further instructions when lost moving west", function() {
      gridController.robotInstructions = "LFFFFRFRF";
      expect(gridController.moveRobot()).toEqual("02WLOST");
    });
  });

  describe("lost robots leave scent, so future robots don't go off grid at the same point", function() {
    it("robot ignores command to move off the grid north, where a robot has been lost", function() {
      gridController.robotInstructions = "FF";
      gridController.moveRobot();
      gridController.clearRobot();
      gridController.robotCoords.x = 3;
      gridController.robotCoords.y = 3;
      gridController.robotCoords.orientation = "N";
      gridController.robotInstructions = "FLFLF";
      gridController.moveRobot();
      expect(gridController.robotPosition).toEqual("22S");
    });

    it("robot ignores command to move off the grid south, where a robot has been lost before", function() {
      gridController.robotInstructions = "RRFFF";
      gridController.moveRobot();
      gridController.clearRobot();
      gridController.robotCoords.x = 3;
      gridController.robotCoords.y = 0;
      gridController.robotCoords.orientation = "S";
      gridController.robotInstructions = "FRF";
      gridController.moveRobot();
      expect(gridController.robotPosition).toEqual("20W");
    });

    it("robot ignores command to move off the grid east, where a robot has been lost before", function() {
      gridController.robotInstructions = "RFFF";
      gridController.moveRobot();
      gridController.clearRobot();
      gridController.robotCoords.x = 5;
      gridController.robotCoords.y = 2;
      gridController.robotCoords.orientation = "E";
      gridController.robotInstructions = "FRF";
      gridController.moveRobot();
      expect(gridController.robotPosition).toEqual("51S");
    });

    it("robot ignores command to move off the grid west, where a robot has been lost before", function() {
      gridController.robotInstructions = "LFFFF";
      gridController.moveRobot();
      gridController.clearRobot();
      gridController.robotCoords.x = 0;
      gridController.robotCoords.y = 2;
      gridController.robotCoords.orientation = "W";
      gridController.robotInstructions = "FLF";
      gridController.moveRobot();
      expect(gridController.robotPosition).toEqual("01S");
    });
  });
});
