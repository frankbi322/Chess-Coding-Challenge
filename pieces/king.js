const Piece = require('./piece');

class King extends Piece {

  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'K' : 'k';
  }

  moves() {
    return [
     [-1,-1],
     [-1,0],
     [-1,1],
     [0,-1],
     [0,1],
     [1,-1],
     [1,0],
     [1,1]
   ];
  }
}

module.exports = King;
