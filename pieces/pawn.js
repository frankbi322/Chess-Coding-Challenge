const Piece = require('./piece');
const NullPiece = require('./nullpiece');

class Pawn extends Piece {
  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'P' : 'p';
  }

  moves (playerColor, board) {
    var colorCheck = playerColor === 'white' ? 'black' : 'white';
    var currentPosition = [[this.i],[this.j]];
    // console.log("currentPosition: " + currentPosition);
    let validMoves = [];
    // console.log("moveDifferences: " + this.moveDifferences(board));
    this.forwardSteps().forEach( (move) => {
      let newPosition = [[this.i + move[0]],[this.j + move[1]]];
      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >= 0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]] instanceof  NullPiece) {
          validMoves.push(newPosition.toString());
        }
    }
    });
    this.diagonalSteps(board).forEach( (move) => {
      let newPosition = [[this.i + move[0]],[this.j + move[1]]];
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
    var moves = [];
    var vertical = this.forwardDirection();
    moves.push([vertical,0]);
    if (this.i === 1 && this.color === 'black') {
      moves.push([2,0]);
    } else if (this.i === 6 && this.color === 'white') {
      moves.push([-2,0]);
    }
    return moves;
  }

  diagonalSteps(board) {
    var moves = [];
    var currentPosition = [[this.i],[this.j]];
    // console.log("board: " + board[this.i][this.j].color);
    // console.log(board);
    if (board[this.i][this.j].color === 'white') {
      // console.log(board[this.i][this.j].color === 'white'); //returns true
      if ((this.i - 1 >= 0 && this.j - 1 >= 0) && (board[this.i - 1][this.j - 1].color === 'black')) {
          moves.push([-1,-1]);
      }
      if ((this.i - 1 >= 0 && this.j + 1 <= 7) && (board[this.i - 1][this.j + 1].color === 'black')) {
          moves.push([-1,1]);
      }
    } else if (board[this.i][this.j].color === 'black') {
      // console.log(board[this.i][this.j].color === 'black'); //returns true
      if ((this.i + 1 <= 7 && this.j - 1 >= 0) && (board[this.i + 1][this.j - 1].color === 'white')) {
          moves.push([1,-1]);
      }
      if ((this.i + 1 <= 7 && this.j + 1 <= 7) && (board[this.i + 1][this.j + 1].color === 'white')) {
          moves.push([1,1]);
      }
    }
    // console.log("Diagonals: " + moves);
    return moves;
  }

  moveDifferences (board) {
    var moves = [];
    moves.push(this.forwardSteps());
    // console.log("moves forwardSteps: " + moves);
    moves.push(this.diagonalSteps(board));
    // console.log("moves: " + this.forwardSteps() + this.diagonalSteps());
    // console.log("moveDifferences: " + moves);
    return moves;
  }
}

module.exports = Pawn;
