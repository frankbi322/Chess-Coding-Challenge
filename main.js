const Piece = require('./pieces/piece');
const King = require('./pieces/king');
const Queen = require('./pieces/queen');
const Bishop = require('./pieces/bishop');
const Knight = require('./pieces/knight');
const Rook = require('./pieces/rook');
const Pawn = require('./pieces/pawn');
const NullPiece = require('./pieces/nullpiece');

// steps
// 1. set up board and pieces - DONE
// 2. write function that takes an array of piece objects, with name, color, and position properties, and places corresponding pieces on the board - DONE
// 3. iterate over pieces and put all valid moves into a results array
// 4. Output format example:
//    Player: white
//    Pieces:
//      King, current position: board[0][0], available moves: board[0][1], board[1][0] // [1][1] is blocked by white queen
//      Queen, current position: board[1][1], available moves: board[1][0]... // [0][0] is blocked by white king


//instantiates empty 8 x 8 board as a 2-D matrix
let board = new Array(8);
for (let x = 0; x < 8; x++) {
  board[x] = new Array(8);
}


//this function places null pieces into each spot in board...
function placePieces (pieces) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      board[row][col] = new NullPiece(row,col);
    }
  }
//then takes each piece passed in as an argument and replaces the corresponding nullpiece on the board
  pieces.forEach ((piece) => {
    board[piece.row][piece.col] = new piece.pieceName(piece.color, piece.row, piece.col);
  });
}

//Function to display the board to help with visualization
function display () {
  let displayBoard = new Array(8);
  for (let j = 0; j < 8; j++) {
    displayBoard[j] = new Array(8);
  }

  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      displayBoard[k][l] = board[k][l].icon;
    }
    displayBoard[k] = displayBoard[k].toString();
  }
  return displayBoard;
}

//Iterates through board positions. Position colors can be blank (nullpiece), black, or white.
//Adds to moves array only if piece is of player's color
function listMoves (playerColor) {
  console.log("Current Player: " + playerColor);
  let result = [];
  for (let j = 0; j < 8; j++) {
    for (let k = 0; k < 8; k++) {
      if (board[j][k].color === playerColor) {
        let pieceDetail = {
          Name: board[j][k].constructor.name,
          CurrentPosition: j.toString() + "," + k.toString(),
          Moves: (board[j][k].moves(playerColor, board))
        };
        result.push(pieceDetail);
      }
    }
  }
  return result;
}

placePieces([
  {pieceName: King, color: 'white', row: 4, col: 4},
  {pieceName: King, color: 'black', row: 6, col: 6},
  {pieceName: Queen, color: 'white', row: 5, col: 5},
  {pieceName: Queen, color: 'black', row: 3, col: 0},
  {pieceName: Bishop, color: 'black', row: 3, col: 2},
  {pieceName: Bishop, color: 'white', row: 1, col: 3},
  {pieceName: Knight, color: 'white', row: 3, col: 3},
  {pieceName: Knight, color: 'black', row: 7, col: 7},
  {pieceName: Knight, color: 'black', row: 5, col: 6},
  {pieceName: Knight, color: 'white', row: 7, col: 6},
  {pieceName: Rook, color: 'black', row: 0, col: 7},
  {pieceName: Rook, color: 'white', row: 0, col: 0},
  {pieceName: Rook, color: 'white', row: 6, col: 1},
  {pieceName: Pawn, color: 'white', row: 6, col: 3},
  {pieceName: Pawn, color: 'black', row: 1, col: 5},
  {pieceName: Pawn, color: 'white', row: 7, col: 5},
  {pieceName: Pawn, color: 'black', row: 1, col: 4},
  {pieceName: Pawn, color: 'black', row: 5, col: 3},
  {pieceName: Pawn, color: 'black', row: 1, col: 6},
  {pieceName: Pawn, color: 'white', row: 2, col: 4},
  {pieceName: Pawn, color: 'white', row: 6, col: 2},
  {pieceName: Pawn, color: 'white', row: 2, col: 0},
  {pieceName: Pawn, color: 'white', row: 6, col: 0},
  {pieceName: Pawn, color: 'black', row: 5, col: 1},
]);

console.log(display(board));
console.log(listMoves('white'));
console.log(listMoves('black'));
