// app.controller("GridController", ["$scope", function($scope) {
//   // $scope.grid = createGrid();
//   // $scope.square = "----";
// }]);

app.controller('formCtrl', [function() {
  this.coords = {
    x: '',
    y: ''
  };

  this.createGrid = function() {
    console.log("Coordinates are:", this.coords);

    var xCoord = parseInt(this.coords['x']);
    var yCoord = parseInt(this.coords['y']);

    console.log(xCoord);
    console.log(yCoord);

    var grid = {};
    grid.rows = [];

    for(var i = 0; i < xCoord; i++) {
      var row = {};
      row.cells = [];

      // console.log(row);

      for(var j = 0; j < yCoord; j++) {
        var cell = {};
        row.cells.push(cell);
      }

      grid.rows.push(row);
    }
    console.log(grid);

    return grid;
  };
}]);
