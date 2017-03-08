const Piece = require('./pieces/piece');
const King = require('./pieces/king');
const Queen = require('./pieces/queen');
const Bishop = require('./pieces/bishop');
const Knight = require('./pieces/knight');
const Rook = require('./pieces/rook');
const Pawn = require('./pieces/pawn');
const NullPiece = require('./pieces/nullpiece');

// steps
// 1. set up board and pieces
// 2. write function that takes a bunch of pieces (including color and rank) and places them on the Board
// 3. iterate over pieces and put all valid moves into a results array
// 4. Output format example:
//    Player: white
//    Pieces:
//      King, current position: board[0][0], available moves: board[0][1], board[1][0] // [1][1] is blocked by white queen
//      Queen, current position: board[1][1], available moves: board[1][0]... // [0][0] is blocked by white king

var board = new Array(8);
for (var i = 0; i < 8; i++) {
  board[i] = new Array(8);
}

function placePieces (pieces) {
  for (var j = 0; j < 8; j++) {
    for (var k = 0; k < 8; k++) {
      board[j][k] = new NullPiece(j,k);
    }
  }
  // board.forEach((row)=>{ // REWRITE USING INDICES
  //   console.log(row);
  //   row.forEach((col)=>{
  //     console.log(col);
  //     board[row][col] = new NullPiece(row, col);
  //   });
  // });

  pieces.forEach ((piece) => {
    board[piece.i][piece.j] = new piece.pieceName(piece.color, piece.i, piece.j);
  });
  board.forEach((row)=>{
    row.forEach((col)=>{

    });
  });
}

function display () {
  var displayBoard = new Array(8);
  for (var j = 0; j < 8; j++) {
    displayBoard[j] = new Array(8);
  }

  for (var k = 0; k < 8; k++) {
    for (var l = 0; l < 8; l++) {
      // console.log(board[k][l]);
      displayBoard[k][l] = board[k][l].icon;
    }
  }
  // board.forEach ((row) => {
  //   row.forEach ((col) => {
  //     // console.log(board[row][col]);
  //     displayBoard[row][col] = board[row][col].icon();
  //   });
  // });
  // console.log(displayBoard);
  return displayBoard;
}


function listMoves (playerColor) { //todo: add functionality to check player's color
  let result = [];
  for (var j = 0; j < 8; j++) {
    for (var k = 0; k < 8; k++) {
      if (board[j][k] instanceof Piece && board[j][k].color === playerColor) {
        var pieceDetail = {
          name: board[j][k].constructor.name,
          currentPosition: j.toString() + "," + k.toString(),
          moves: (board[j][k].moves(playerColor, board))
        };
        result.push(pieceDetail);
      }
    }
  }
  return result;
}

placePieces([
  {pieceName: King, color: 'white', i: 4, j: 4},
  {pieceName: King, color: 'black', i: 6, j: 6},
  // {pieceName: Queen, color: 'white', i: 1, j: 1},
  {pieceName: Knight, color: 'white', i: 3, j: 3},
  {pieceName: Knight, color: 'black', i: 7, j: 7},
  {pieceName: Knight, color: 'black', i: 5, j: 6},
  {pieceName: Knight, color: 'white', i: 7, j: 6},
  // {pieceName: Bishop, color: 'white', i: 4, j: 2},
  // {pieceName: Rook, color: 'black', i: 0, j: 7},
  // {pieceName: Rook, color: 'white', i: 0, j: 0},
  // {pieceName: Pawn, color: 'black', i: 1, j: 0},
  // {pieceName: Pawn, color: 'white', i: 6, j: 0},
  // {pieceName: Pawn, color: 'black', i: 5, j: 1},
]);
// console.log(board);
console.log(display());
console.log(listMoves('white'));
