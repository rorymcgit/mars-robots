// app.controller("GridController", ["$scope", function($scope) {
//   // $scope.grid = createGrid();
//   // $scope.square = "----";
// }]);

app.controller("formCtrl", function($scope) {
    $scope.inputValue = null;
    $scope.createGrid = function(coordinates) {
      console.log("Coordinates are:", coordinates);
      var xCoord = parseInt(coordinates.split("")[0]);
      var yCoord = parseInt(coordinates.split("")[1]);

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
});
