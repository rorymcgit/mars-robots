function createGrid() {
  var grid = {};
  grid.rows = [];

  for(var i = 0; i < 5; i++) {
    var row = {};
    row.spots = [];

    console.log(row);
    console.log(row.spots);

    for(var j = 0; j < 5; j++) {
      var spot = {};
      row.spots.push(spot);
    }

    grid.rows.push(row);
  }

  return grid;
}
