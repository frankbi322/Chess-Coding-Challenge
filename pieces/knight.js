const Piece = require('./piece');

class Knight extends Piece {
  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'H' : 'h'; // H for Horse
  }

  moves () {
    [
      [-2,1],
      [-2,-1],
      [1,2],
      [1,-2],
      [-1,2],
      [-1,-2],
      [-2,1],
      [-2,-1]
    ];
  }
}

module.exports = Knight;
