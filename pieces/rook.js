const Piece = require('./piece');

class Rook extends Piece {

  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'R' : 'r';
  }

  moves() {
    return [
     [-1,0],
     [0,-1],
     [0,1],
     [1,0]
   ];
  }
}

module.exports = Rook;
