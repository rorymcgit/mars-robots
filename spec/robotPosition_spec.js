describe("Robot position", function() {
  var gridController;

  beforeEach(function(){
    module("marsRobots");

    inject(function($controller) {
      gridController = $controller("gridController");
    });
  });

  it("robot start x coordinate is null as default", function() {
    expect(gridController.roboStartCoords["x"]).toEqual(null);
  });

  it("robot start y coordinate is null as default", function() {
    expect(gridController.roboStartCoords["y"]).toEqual(null);
  });

  it("direction is null as default", function() {
    expect(gridController.roboStartCoords["direction"]).toEqual(null);
  });

  describe("defined grid with a robot position + direction", function() {
    beforeEach(function() {
      gridController.gridCoords["x"] = "5";
      gridController.gridCoords["y"] = "3";
      gridController.createGrid();
      gridController.roboStartCoords["x"] = 3;
      gridController.roboStartCoords["y"] = 2;
      gridController.roboStartCoords["direction"] = "N";
    });

    it("logs a robot's start position", function() {
      expect(gridController.placeRobot()).toEqual("32N");
    });
  });
});
