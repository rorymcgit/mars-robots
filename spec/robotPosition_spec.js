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

  it("orientation is null as default", function() {
    expect(gridController.robotCoords["orientation"]).toEqual(null);
  });

  describe("defined grid with a robot position + orientation", function() {
    beforeEach(function() {
      gridController.gridCoords["x"] = "5";
      gridController.gridCoords["y"] = "3";
      gridController.createGrid();
      gridController.robotCoords["x"] = 3;
      gridController.robotCoords["y"] = 2;
      gridController.robotCoords["orientation"] = "N";
    });

    it("logs a robot's start position", function() {
      expect(gridController.stringifyRobotPosition()).toEqual("32N");
    });
  });
});
