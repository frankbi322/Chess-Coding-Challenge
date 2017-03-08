const Piece = require('./piece');

class Queen extends Piece {

  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'Q' : 'q';
  }

  // icon() {
  //   if (this.color === 'white') {
  //     return 'Q';
  //   } else {
  //     return 'q';
  //   }
  // }

  moves() {
    [
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

module.exports = Queen;
