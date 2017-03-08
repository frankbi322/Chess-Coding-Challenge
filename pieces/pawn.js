const Piece = require('./piece');

class Pawn extends Piece {
  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'P' : 'p';
  }

  moves () {
    return forwardSteps + diagonalSteps;
  }

  forwardDirection(){
    return color === 'white' ? -1 : 1;
  }

  forwardSteps () {
    var steps = [this.i + this.forwardDirection()][this.j];
    return steps;
  }
}

module.exports = Pawn;
