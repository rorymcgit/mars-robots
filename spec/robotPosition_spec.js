describe("Robot position", function() {
  var gridController;

  beforeEach(function(){
    module("marsRobots");

    inject(function($controller) {
      gridController = $controller("gridController");
    });
  });

  it("robot start x coordinates empty as default", function() {
    expect(gridController.roboStartCoords["x"]).toEqual("");
  });

  it("robot start y coordinates empty as default", function() {
    expect(gridController.roboStartCoords["y"]).toEqual("");
  });

  describe("defined grid with a robot position", function() {
    beforeEach(function() {
      gridController.gridCoords["x"] = "5";
      gridController.gridCoords["y"] = "3";
      gridController.createGrid();
      gridController.roboStartCoords["x"] = 3;
      gridController.roboStartCoords["y"] = 2;
    });

    it("logs a robot's start position", function() {
      expect(gridController.placeRobot()).toEqual("32")
    });
  });
});
