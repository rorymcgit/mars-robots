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
  });

  it("provides complex move instructions and receives the robot's final position", function() {
    gridController.robotInstructions = "RFFRFRFFLFRRFFLFL";
    expect(gridController.moveRobot()).toEqual("22S");
  });

  it("returns the position a robot was lost at moving north off grid", function() {
    gridController.robotInstructions = "FF";
    expect(gridController.moveRobot()).toEqual("33NLOST");
  });

  it("returns the position a robot was lost at moving south off grid", function() {
    gridController.robotInstructions = "LLFFF";
    expect(gridController.moveRobot()).toEqual("30SLOST");
  });

  it("returns the position a robot was lost at moving east off grid", function() {
    gridController.robotInstructions = "RFFF";
    expect(gridController.moveRobot()).toEqual("52ELOST");
  });

  it("returns the position a robot was lost at moving west off grid", function() {
    gridController.robotInstructions = "LFFFF";
    expect(gridController.moveRobot()).toEqual("02WLOST");
  });

  it("doesn't follow futher instructions after being lost", function() {
    gridController.robotInstructions = "FFR";
    expect(gridController.moveRobot()).toEqual("33NLOST");
  });

  // xit("robot ignores command to move off the grid, when a robot has previously moved off from the same point", function() {
  //   gridController.robotInstructions = "FF";
  //   gridController.moveRobot();
  //   gridController.clearRobot();
  //   gridController.robotCoords.x = 3;
  //   gridController.robotCoords.y = 3;
  //   gridController.robotCoords.orientation = "N";
  //   console.log(gridController.robotCoords);
  //   gridController.robotInstructions = "FLF";
  //   gridController.moveRobot();
  //   console.log('controller', gridController);
  //   expect(gridController.robotPosition).toEqual("23W");
  // });

});
