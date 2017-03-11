const Piece = require('./piece');

class Knight extends Piece {
  constructor(color, row, col) {
    super(color, row, col);
    this.icon = this.color === 'white' ? 'H' : 'h'; // H for Horse
  }

  moves (playerColor, board) {
    let currentPosition = [[this.row],[this.col]];
    let validMoves = [];
    this.moveDifferences().forEach( (move) => {
      let newPosition = [[this.row + move[0]],[this.col + move[1]]];
      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >=0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]].color !== playerColor) {
          validMoves.push(newPosition.toString());
        }
      }
    });
    return validMoves;
  }

  moveDifferences () {
    return [
      [-2,1],
      [-2,-1],
      [1,2],
      [1,-2],
      [-1,2],
      [-1,-2],
      [2,1],
      [2,-1]
    ];
  }
}

module.exports = Knight;
