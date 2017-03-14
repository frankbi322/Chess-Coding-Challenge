//null pieces represent blank spaces on board to help with logic and display

class NullPiece {

  constructor(row, col) {
    this.color = "blank";
    this.row = row;
    this.col = col;
    this.icon = '| |';
  }

}

module.exports = NullPiece;
