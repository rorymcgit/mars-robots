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

});
