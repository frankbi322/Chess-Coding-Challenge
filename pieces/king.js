const Piece = require('./piece');

class King extends Piece {

  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'K' : 'k';
  }

  moves (playerColor, board) {
    var currentPosition = [[this.i],[this.j]];
    let validMoves = [];
    this.moveDifferences().forEach( (move) => {
      let newPosition = [[this.i + move[0]],[this.j + move[1]]];
      // console.log("newPosition: " + newPosition);
      // console.log(board[newPosition[0]][newPosition[1]].color);
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
