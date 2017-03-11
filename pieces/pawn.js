const Piece = require('./piece');
const NullPiece = require('./nullpiece');

class Pawn extends Piece {
  constructor(color, row, col) {
    super(color, row, col);
    this.icon = this.color === 'white' ? 'P' : 'p';
  }

  moves (playerColor, board) {
    let colorCheck = playerColor === 'white' ? 'black' : 'white';
    let currentPosition = [[this.row],[this.col]];
    // console.log("currentPosition: " + currentPosition);
    let validMoves = [];
    // console.log("moveDifferences: " + this.moveDifferences(board));
    this.forwardSteps().forEach( (move) => {
      let newPosition = [[this.row + move[0]],[this.col + move[1]]];
      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >= 0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]] instanceof  NullPiece) {
          validMoves.push(newPosition.toString());
        }
    }
    });
    this.diagonalSteps(board).forEach( (move) => {
      let newPosition = [[this.row + move[0]],[this.col + move[1]]];
      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >= 0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]].color === colorCheck) {
          validMoves.push(newPosition.toString());
        }
    }
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

  forwardSteps () {
    let moves = [];
    let vertical = this.forwardDirection();
    moves.push([vertical,0]);
    if (this.row === 1 && this.color === 'black') {
      moves.push([2,0]);
    } else if (this.row === 6 && this.color === 'white') {
      moves.push([-2,0]);
    }
    return moves;
  }

  diagonalSteps(board) {
    let moves = [];
    let currentPosition = [[this.row],[this.col]];
    if (board[this.row][this.col].color === 'white') {
      if ((this.row - 1 >= 0 && this.col - 1 >= 0) && (board[this.row - 1][this.col - 1].color === 'black')) {
          moves.push([-1,-1]);
      }
      if ((this.row - 1 >= 0 && this.col + 1 <= 7) && (board[this.row - 1][this.col + 1].color === 'black')) {
          moves.push([-1,1]);
      }
    } else if (board[this.row][this.col].color === 'black') {
      if ((this.row + 1 <= 7 && this.col - 1 >= 0) && (board[this.row + 1][this.col - 1].color === 'white')) {
          moves.push([1,-1]);
      }
      if ((this.row + 1 <= 7 && this.col + 1 <= 7) && (board[this.row + 1][this.col + 1].color === 'white')) {
          moves.push([1,1]);
      }
    }
    return moves;
  }

  moveDifferences (board) {
    let moves = [];
    moves.push(this.forwardSteps());
    moves.push(this.diagonalSteps(board));
    return moves;
  }
}

module.exports = Pawn;
