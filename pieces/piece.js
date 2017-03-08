//Todo: review modules in JS. Util in asteroids?
//1: moves method should be current position plus move differentials for a given piece, so long as 1. board at that position's piece color isn't current player's and 2. piece goes within board bounds.


class Piece {
  constructor(color, i, j) {
    this.color = color;
    this.i = i;
    this.j = j;
    this.icon = ' ';
  }

  // icon () {
  //
  // }

  moves () {
    var arr = [];
  }

  movePiece(startPos,endPos) {
    i += moves[0];
    j += moves[1];
  }

  validMoves(i,j){

  }
}

module.exports = Piece;
