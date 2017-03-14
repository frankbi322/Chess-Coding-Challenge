const Piece = require('./piece');
const NullPiece = require('./nullpiece');

class Pawn extends Piece {
  constructor(color, row, col) {
    super(color, row, col);
    this.icon = this.color === 'white' ? '|\u2659|' : '|\u265F|';
  }

  moves (playerColor, board) {
    let colorCheck = playerColor === 'white' ? 'black' : 'white';
    let currentPosition = [[this.row],[this.col]];
    let validMoves = [];

    this.forwardSteps(board).forEach( (move) => {
      let newPosition = [[this.row + move[0]],[this.col + move[1]]];
      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >= 0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]] instanceof  NullPiece) {
          validMoves.push(newPosition.toString());
        }
    }
    });
    this.diagonalSteps(board, colorCheck).forEach( (move) => {
      let newPosition = [[this.row + move[0]],[this.col + move[1]]];
          validMoves.push(newPosition.toString());
    });
    return validMoves;
  }

  forwardDirection(){
    if (this.color === 'white') {
      return -1;
    } else {
      return 1;
    }
  }

  forwardSteps (board) {
    let moves = [];
    let vertical = this.forwardDirection();
    moves.push([vertical, 0]);
    let currentPosition = [[this.row],[this.col]];

    //logic for starting pawn rows: can move two spaces vertically if no impeding piece
    if ((this.row === 1 && this.color === 'black') && (board[this.row + 1][this.col] instanceof NullPiece)) {
        moves.push([2, 0]);
    } else if ((this.row === 6 && this.color === 'white') && (board[this.row - 1][this.col] instanceof NullPiece)) {
      moves.push([-2, 0]);
    }
    return moves;
  }

  //Pawn can move diagonally forward if it stays within bounds and take opposing piece
  diagonalSteps(board, colorCheck) {
    let moves = [];
    let currentPosition = [[this.row],[this.col]];
    let vertical = this.forwardDirection();

      if ((this.row + vertical >= 0 && this.col - 1 >= 0) && (board[this.row + vertical][this.col - 1].color === colorCheck)) {
          moves.push([vertical, -1]);
      }
      if ((this.row + vertical >= 0 && this.col + 1 <= 7) && (board[this.row + vertical][this.col + 1].color === colorCheck)) {
          moves.push([vertical, 1]);
      }

    return moves;
  }
}

module.exports = Pawn;
