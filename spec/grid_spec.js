describe("gridController", function() {
  var gridController;

  beforeEach(function(){
    module("marsRobots");

    inject(function($controller) {
      gridController = $controller("gridController");
    });
  });

  it("x coordinates empty as default", function() {
    expect(gridController.coords["x"]).toEqual("");
  });

  it("y coordinates empty as default", function() {
    expect(gridController.coords["y"]).toEqual("");
  });

  it("creates a 2D grid array", function() {
    gridController.coords['x'] = '5';
    gridController.coords['y'] = '3';

    var expectedGridArray = [ ["00", "01", "02", "03"],
                              ["10", "11", "12", "13"],
                              ["20", "21", "22", "23"],
                              ["30", "31", "32", "33"],
                              ["40", "41", "42", "43"],
                              ["50", "51", "52", "53"]];

    expect(gridController.createGrid()).toEqual(expectedGridArray);
  });
});
