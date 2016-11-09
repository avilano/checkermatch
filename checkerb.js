

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
}

function randPattern(RandBoard) {
  for (var i = 0; i < RandBoard.length; i++) {
    for (var j = 0; j < RandBoard.length; j++){
      RandBoard[i][j] = Math.floor(Math.random() * (2 - 0 + 1)) + 0; // syntax(max - min + 1)) + min
      }
    }
  return RandBoard;
}

function isConsecutive(a,b,c,d) {
  return ( (a !== 0)&&(a==b)&&(b==c)&&(c==d) );
}

function mainCheck(tile) { // note that j is X-coordinate and i is Y-coordinate

  //array for matched tiles
  var matchedArr = [];

  //checks vertically
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < tile.length; j++) {
      if ( isConsecutive(tile[i][j], tile[i+1][j], tile[i+2][j], tile[i+3][j]) ) {
          matchedArr.push(["vertically",i,j]);
      }
    }
  }
  //checks horizontally
  for (var i = 0; i  < tile.length; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i][j+1], tile[i][j+2], tile[i][j+3] )) {
          matchedArr.push(["horizontally",i,j]);

      }
    }
  }
  //checks diagonally-right
  for (var i = 0; i  < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i+1][j+1], tile[i+2][j+2], tile[i+3][j+3] )) {
          matchedArr.push(["diagright",i,j]);

      }
    }
  }
  //checks diagonally-left
  for (var i = 3; i  < 8; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i-1][j+1], tile[i-2][j+2], tile[i-3][j+3] )) {
          matchedArr.push(["diagleft",i,j]);

      }
    }
  }

  return matchedArr;
}

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


console.log(mainCheck(checkerArr));

/*
var matchTile = mainCheck(checkerArr);
var verticalMatchX = matchTile[1];
var verticalMatchY = matchTile[2];
console.log("Found 4 consecutive tiles from tile " + verticalMatchX + "," + verticalMatchY + ".");
*/
