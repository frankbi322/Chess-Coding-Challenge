const Piece = require('./piece');

class Bishop extends Piece {

  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'B' : 'b';
  }

  moves() {
    [
     [-1,-1],
     [-1,1],
     [1,-1],
     [1,1]
   ];
  }
}

module.exports = Bishop;
