describe("gridController", function() {
  var gridController;

  beforeEach(function(){
    module("marsRobots");

    inject(function($controller) {
      gridController = $controller("gridController");
    });
  });

  it("x coordinates empty as default", function() {
    expect(gridController.gridCoords["x"]).toEqual("");
  });

  it("y coordinates empty as default", function() {
    expect(gridController.gridCoords["y"]).toEqual("");
  });

  describe("defined grid", function() {
    beforeEach(function() {
      gridController.gridCoords["x"] = "5";
      gridController.gridCoords["y"] = "3";
    });

    it("creates a 2D grid array", function() {
      var expectedGridArray = [ ["00", "01", "02", "03"],
                                ["10", "11", "12", "13"],
                                ["20", "21", "22", "23"],
                                ["30", "31", "32", "33"],
                                ["40", "41", "42", "43"],
                                ["50", "51", "52", "53"]];

      expect(gridController.createGrid()).toEqual(expectedGridArray);
    });
  });
});
