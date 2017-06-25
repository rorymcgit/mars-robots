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

  it("doesn't follow futher instructions when lost moving north", function() {
    gridController.robotInstructions = "FFR";
    expect(gridController.moveRobot()).toEqual("33NLOST");
  });

  it("doesn't follow futher instructions when lost moving south", function() {
    gridController.robotInstructions = "LLFFFRLF";
    expect(gridController.moveRobot()).toEqual("30SLOST");
  });

  it("doesn't follow futher instructions when lost moving east", function() {
    gridController.robotInstructions = "RFFFRLFR";
    expect(gridController.moveRobot()).toEqual("52ELOST");
  });

  it("doesn't follow futher instructions when lost moving west", function() {
    gridController.robotInstructions = "LFFFFRFRF";
    expect(gridController.moveRobot()).toEqual("02WLOST");
  });

  xit("robot ignores command to move off the grid, when a robot has previously moved off from the same point", function() {
    gridController.robotInstructions = "FF";
    gridController.moveRobot();
    gridController.clearRobot();
    gridController.robotCoords.x = 3;
    gridController.robotCoords.y = 3;
    gridController.robotCoords.orientation = "N";
    console.log(gridController.robotCoords);
    gridController.robotInstructions = "FLF";
    gridController.moveRobot();
    console.log('controller', gridController);
    expect(gridController.robotPosition).toEqual("23W");
  });

});
