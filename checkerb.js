

var checkerArr = [

  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]

];

function pattern(board) {
for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++){
        if ( (i+j)%2 === 0 ) {
          board[i][j] = 1;
        } else {
          board[i][j] = 2;
      }
    }
  }
return board;
};

function randPattern(RandBoard) {
  for (var i = 0; i < RandBoard.length; i++) {
      for (var j = 0; j < RandBoard.length; j++){
        RandBoard[i][j] = Math.floor(Math.random() * (2 - 0 + 1)) + 0; // syntax(max - min + 1)) + min
      }
    }
  return RandBoard;
};

console.log(randPattern(checkerArr));
