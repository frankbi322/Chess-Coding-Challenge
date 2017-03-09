const Piece = require('./piece');
const NullPiece = require('./nullpiece');

class Queen extends Piece {

  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'Q' : 'q';
  }

  // moves (playerColor, board) {
  //   var currentPosition = [[this.i],[this.j]];
  //   let validMoves = [];
  //   this.growMoves(playerColor, board).forEach((move)=>{
  //     let newPosition = [[this.i + move[0]],[this.j + move[1]]];
  //     if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >= 0 && newPosition[1] <= 7)) {
  //       if (board[newPosition[0]][newPosition[1]].color !== playerColor) {
  //         validMoves.push(newPosition.toString());
  //          break;
  //       }
  //   }
  //   });
  //   return validMoves;
  // }

  moves (playerColor, board) {
    var moves = [];
    var colorCheck = playerColor === 'white' ? 'black' : 'white';
    var currentPosition = [this.i,this.j];
    this.moveDifferences().forEach((moveDir) => {
      moves = moves.concat(this.growMoves(playerColor, board, moveDir));



    });
    // console.log(moves);

    return moves;
  }

  growMoves(playerColor, board, moveDir) {
    // console.log(moveDir);
    var colorCheck = playerColor === 'white' ? 'black' : 'white';
    var currentPosition = [this.i,this.j];
    // console.log(currentPosition);
    var moves = [];
    do {
      currentPosition = [currentPosition[0] + moveDir[0],currentPosition[1] + moveDir[1]];
      // console.log(currentPosition);
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
        // console.log("growMoves: at piece " + moves);
        break;
      }
    } while ((currentPosition[0] >= 0 && currentPosition[0]<=7) && (currentPosition[1] >= 0 && currentPosition[1]<=7));
    // console.log("growMoves before last return statement: " + moves);
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
