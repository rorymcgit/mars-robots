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

    var expectedGridArray = [ [0, 1, 2, 3],
                              [0, 1, 2, 3],
                              [0, 1, 2, 3],
                              [0, 1, 2, 3],
                              [0, 1, 2, 3],
                              [0, 1, 2, 3]];

    expect(gridController.createGrid()).toEqual(expectedGridArray);
  });
});
