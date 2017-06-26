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
- Input your first robot's position (x, y) and orientation (N/S/E/W). Hit `Place Robot`
- Enter a series of instructions, separated by whitespace e.g. "LRRFFFRFL"  
  L => pivot left  
  R => pivot right  
  F => move forward one cell  
- Hit `Move Robot` and the robot's position will update.
- `CLEAR CURRENT ROBOT` to place and move your next robot

If a robot ignores an instruction due to a previous robot moving off the grid at the same place, a message will be printed to the console alerting the user of this (see image below).

![](https://github.com/rorymcgit/mars-robots/blob/master/mars-robots-demo.png)

## Technologies Used

- Javascript
- AngularJS
- Jasmine
- Karma

### Successes
I am happy with the createGrid function which I rewrote several times at the beginning of the project. I originally intended to create a visual grid with AngularJS. However, after reading the spec a number of times I concluded this was not necessary and as AngularJS was brand new to me it might have overcomplicated things.  

I split up a lot of repetition in the moveRobot function to separate functions. This makes the whole function relatively readable and these functions are reusable in case additional movements (e.g. backwards) are to be added.  

Testing! Used TDD throughout, and every move from every orientation is thoroughly tested.

Fully implemented all requested features (lost robot reporting, lost robot scent, all movements).  


### Struggles
The visualisation of the grid was tough throughout, I drew up a grid on a piece of paper and stepped through it whenever I needed to visualise a movement. This was imperative to the success of the project.  

I am not a big fan of the fact that everything lives within my gridController. This falls down to the fact that AngularJS was new to me at the beginning of the project. Although all of the functions within the controller pertain to the grid, I feel I could have tackled this project differently, perhaps by instantiating new Robot objects and passing these into the grid each time. This would change the UI from the user clearing a robot when placing another, to adding a new robot each time, with the other robot details remaining untouched.  

After doing some research I concluded that I should not mix/inject controllers in AngularJS. After this project I now intend to spend more time reading up on it, building projects in it and learning its nuances.

Overall I had a lot of fun building this and learned a lot.  

#### Potential Future Features:
- Visual grid, updating robot positions onto the grid
- Backwards or diagonal moves
- Some CSS!
