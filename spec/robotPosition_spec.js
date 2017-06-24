describe("Robot position", function() {
  var gridController;

  beforeEach(function(){
    module("marsRobots");

    inject(function($controller) {
      gridController = $controller("gridController");
    });
  });

  it("robot start x coordinate is null as default", function() {
    expect(gridController.robotCoords["x"]).toEqual(null);
  });

  it("robot start y coordinate is null as default", function() {
    expect(gridController.robotCoords["y"]).toEqual(null);
  });

  it("direction is null as default", function() {
    expect(gridController.robotCoords["direction"]).toEqual(null);
  });

  describe("defined grid with a robot position + direction", function() {
    beforeEach(function() {
      gridController.gridCoords["x"] = "5";
      gridController.gridCoords["y"] = "3";
      gridController.createGrid();
      gridController.robotCoords["x"] = 3;
      gridController.robotCoords["y"] = 2;
      gridController.robotCoords["direction"] = "N";
    });

    it("logs a robot's start position", function() {
      expect(gridController.placeRobot()).toEqual("32N");
    });
  });
});
