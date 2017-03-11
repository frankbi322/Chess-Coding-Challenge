const Piece = require('./piece');
const NullPiece = require('./nullpiece');

class Queen extends Piece {

  constructor(color, row, col) {
    super(color, row, col);
    this.icon = this.color === 'white' ? 'Q' : 'q';
  }

  moves (playerColor, board) {
    let moves = [];
    let colorCheck = playerColor === 'white' ? 'black' : 'white';
    let currentPosition = [this.row,this.col];
    this.moveDifferences().forEach((moveDir) => {
      moves = moves.concat(this.growMoves(playerColor, board, moveDir));
    });
    return moves;
  }

//helper method to find empty spaces where piece can slide through in a given direction.
//when it gets to a piece, it allows that move only if the piece is of the opposite color.
//breaks afterward
  growMoves(playerColor, board, moveDir) {
    let colorCheck = playerColor === 'white' ? 'black' : 'white';
    let currentPosition = [this.row,this.col];
    let moves = [];
    do {
      currentPosition = [currentPosition[0] + moveDir[0],currentPosition[1] + moveDir[1]];
      if (
        currentPosition[0] < 0 ||
        currentPosition[0] > 7 ||
        currentPosition[1] < 0 ||
        currentPosition[1] > 7
      ) {
        break;
      }
      if (board[currentPosition[0]][currentPosition[1]].color === 'blank') { //nullpiece
        moves.push(currentPosition.toString());
      } else {
        if (board[currentPosition[0]][currentPosition[1]].color === colorCheck) {
          moves.push(currentPosition.toString());
        }
        break;
      }
    } while ((currentPosition[0] >= 0 && currentPosition[0]<=7) && (currentPosition[1] >= 0 && currentPosition[1]<=7));
    return moves;
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

module.exports = Queen;
