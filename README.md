# Mars Robots

This web application allows the user to create a grid to their desired size (<50 cells on each axis), place a 'robot' at a cell with a North/South/East West orientation, and then move the robot with a series of Left/Right/Forward instructions (<100 movements). The output is the final position and orientation of the robot.

In the case where a robot receives instructions to move off the allocated grid space, this robot will be lost forever. However, a 'scent' will be left by the lost robot so future robots will know not to get lost at the same place on this grid.


## Installation Instructions

- `git clone https://github.com/rorymcgit/mars-robots.git`
- `npm install` to install dependencies
- To run tests, the Karma CLI is required. Run `npm install -g karma-cli` to install
- `karma start` to run all 25 tests

## Usage Instructions

- Open `./index.html` in your favourite browser
- Input your desired grid size, in columns and rows (1 extra will be added for the zero-th column/row), and hit `Create Grid`
- Input your first robot's position (x, y), orientation (N/S/E/W) and hit `Place Robot`
- Enter a series of instructions, separated by whitespace e.g. "LRRFFFRFL"
  L => pivot left
  R => pivot right
  F => move forward one cell
- Hit `Move Robot` and the robot's position will update.
- `CLEAR CURRENT ROBOT` to place and move your next robot

If a robot ignores an instruction due to a previous robot moving off the grid at the same place, a message will be printed to the console alerting the user of this (see image below).

[]
