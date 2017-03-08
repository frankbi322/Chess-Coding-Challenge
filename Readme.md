Chess Coding Challenge

This is a coding challenge that takes an array of chess pieces and their positions on a board, and returns an array of valid moves a player can make that turn.

A move is valid if all of the following are true:
1. the resulting position is within the board boundaries
2. if the piece is a pawn, king, or knight, the resulting position is not occupied by another piece of the same player's color
3. if the piece is a queen, bishop, or rook, the path it takes to reach the resulting position is not impeded by any piece, and the resulting position is not occupied by another piece of the same player's color

Input format example: white King at position [[7],[7]] of the board (lower right corner):
placePieces([
  {pieceName: King, color: 'white', i: 7, j: 7},
]);

Output format example:
{
  name: 'King',
  color: 'white',
  currentPosition: '7,7',
  moves: [ '6,6', '6,7', '7,6' ]
}


To test, clone this repository and run main.js on Node. Several test cases have been entered with different pieces near
