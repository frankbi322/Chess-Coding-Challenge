const Piece = require('./piece');

class Knight extends Piece {
  constructor(color, i, j) {
    super(color, i, j);
    this.icon = this.color === 'white' ? 'H' : 'h'; // H for Horse
  }

  moves (playerColor, board) {
    // console.log([this.i],[this.j]);
    var currentPosition = [[this.i],[this.j]];
    // console.log("current position: " + currentPosition);
    // console.log(currentPosition[0]);
    let validMoves = [];
    this.moveDifferences().forEach((move)=>{
      let newPosition = [[this.i + move[0]],[this.j + move[1]]];
      // console.log("newPosition: " + [newPosition]);
      // console.log(newPosition[0] >= 0 && newPosition[0] <= 7);
      if ((newPosition[0] >= 0 && newPosition[0] <= 7) && (newPosition[1] >=0 && newPosition[1] <= 7)) {
        if (board[newPosition[0]][newPosition[1]].color !== playerColor) {
          validMoves.push(newPosition.toString());
        }
    }
    });
    // console.log("validMoves: " + validMoves);
    // console.log(validMoves.typeOf);
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
