const Piece = require('./piece');

class King extends Piece {

  constructor(color, row, col) {
    super(color, row, col);
    this.icon = this.color === 'white' ? 'K' : 'k';
  }

  moves (playerColor, board) {
    let currentPosition = [[this.row],[this.col]];
    let validMoves = [];
    this.moveDifferences().forEach( (move) => {
      let newPosition = [[this.row + move[0]],[this.col + move[1]]];
      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >= 0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]].color !== playerColor) {
          validMoves.push(newPosition.toString());
        }
      }
    });
    return validMoves;
  }

  moveDifferences() {
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
