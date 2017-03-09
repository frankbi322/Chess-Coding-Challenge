const Piece = require('./piece');
const NullPiece = require('./nullpiece');

class Bishop extends Piece {

  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'B' : 'b';
  }

  moves (playerColor, board) {
    var currentPosition = [[this.i],[this.j]];
    let validMoves = [];
    this.growMoves(playerColor, board).forEach((move)=>{
      let newPosition = [[this.i + move[0]],[this.j + move[1]]];

      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >=0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]].color !== playerColor) {
          validMoves.push(newPosition.toString());
        }
    }
    });
    return validMoves;
  }

  growMoves(playerColor, board) {
    var currentPosition = [[this.i],[this.j]];
    var colorCheck = playerColor === 'white' ? 'black' : 'white';
    // console.log("currentPosition: " + currentPosition);
    let moves = [];

    this.moveDifferences().forEach( (move) => {
      let moveDir = move.slice(0); //duplicate of move
      let newPosition = [[this.i + moveDir[0]],[this.j + moveDir[1]]];
      // while (
      //   ((newPosition[0] >= 0 && newPosition[0] <= 7) && //within bounds
      //   (newPosition[1] >= 0 && newPosition[1] <= 7)) &&
      //   !(board[newPosition[0]][newPosition[1]] instanceof Piece)){ //not a piece
      //
      //     moves.push([moveDir[0],moveDir[1]]);
      //     newPosition = [[this.i + moveDir[0]],[this.j + moveDir[1]]];
      //     // newPosition[0] += moveDir[0];
      //     // newPosition[1] += moveDir[1];
      //     moveDir[0] += move[0];
      //     moveDir[1] += move[1];
      // }
      while (
        (newPosition[0] >= 0 && newPosition[0] <= 7) && //within bounds
        (newPosition[1] >= 0 && newPosition[1] <= 7)
      ) {
          // console.log(board[newPosition[0]][newPosition[1]] instanceof NullPiece);
          if (board[newPosition[0]][newPosition[1]] instanceof NullPiece) {
            moves.push([moveDir[0],moveDir[1]]);
          } else if (board[newPosition[0]][newPosition[1]].color === colorCheck) {
              moves.push([moveDir[0],moveDir[1]]);
              break;
          } else {
            break;
          }

          newPosition = [[this.i + moveDir[0]],[this.j + moveDir[1]]];
          moveDir[0] += move[0];
          moveDir[1] += move[1];
      }

    });
    // console.log(moves);
    return moves;
  }

  moveDifferences() {
    return [
     [-1,-1],
     [-1,1],
     [1,-1],
     [1,1]
   ];
  }
}

module.exports = Bishop;
