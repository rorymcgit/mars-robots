describe("gridController", function() {
  var gridController;

  beforeEach(function(){
    module("marsRobots");

    inject(function($controller) {
      gridController = $controller("gridController");
    });
  });

  it("should show empty x coordinates", function() {
    expect(gridController.coords["x"]).toEqual("");
  });

  it("should show empty y coordinates", function() {
    expect(gridController.coords["y"]).toEqual("");
  });
});
