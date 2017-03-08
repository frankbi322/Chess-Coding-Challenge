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


//instantiates empty 8 x 8 board as a 2-D matrix
var board = new Array(8);
for (var i = 0; i < 8; i++) {
  board[i] = new Array(8);
}


//this function places null pieces into each spot in board...
function placePieces (pieces) {
  for (var j = 0; j < 8; j++) {
    for (var k = 0; k < 8; k++) {
      board[j][k] = new NullPiece(j,k);
    }
  }
//then takes each piece passed in as an argument and replaces the corresponding null piece on the board
  pieces.forEach ((piece) => {
    board[piece.i][piece.j] = new piece.pieceName(piece.color, piece.i, piece.j);
  });
  board.forEach((row)=>{
    row.forEach((col)=>{
    });
  });
}


//Function to display the board to help with visualization
function display () {
  var displayBoard = new Array(8);
  for (var j = 0; j < 8; j++) {
    displayBoard[j] = new Array(8);
  }

  for (var k = 0; k < 8; k++) {
    for (var l = 0; l < 8; l++) {
      displayBoard[k][l] = board[k][l].icon;
    }
  }
  return displayBoard;
}

//Iterates board positions. Position colors can be blank (null piece), black, or white.
//Adds to result array only if piece is player's color
function listMoves (playerColor) {
  let result = [];
  for (var j = 0; j < 8; j++) {
    for (var k = 0; k < 8; k++) {
      if (board[j][k].color === playerColor) {
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
  {pieceName: Queen, color: 'white', i: 5, j: 5},
  {pieceName: Queen, color: 'black', i: 3, j: 0},
  {pieceName: Bishop, color: 'black', i: 3, j: 2},
  {pieceName: Bishop, color: 'white', i: 1, j: 3},
  {pieceName: Knight, color: 'white', i: 3, j: 3},
  {pieceName: Knight, color: 'black', i: 7, j: 7},
  {pieceName: Knight, color: 'black', i: 5, j: 6},
  {pieceName: Knight, color: 'white', i: 7, j: 6},
  {pieceName: Rook, color: 'black', i: 0, j: 7},
  {pieceName: Rook, color: 'white', i: 0, j: 0},
  {pieceName: Rook, color: 'white', i: 6, j: 1},
  {pieceName: Pawn, color: 'white', i: 6, j: 3},
  {pieceName: Pawn, color: 'black', i: 1, j: 5},
  {pieceName: Pawn, color: 'black', i: 1, j: 6},
  {pieceName: Pawn, color: 'white', i: 6, j: 2},
  {pieceName: Pawn, color: 'black', i: 1, j: 0},
  {pieceName: Pawn, color: 'white', i: 6, j: 0},
  {pieceName: Pawn, color: 'black', i: 5, j: 1},
]);
console.log(display());
console.log(listMoves('black'));
