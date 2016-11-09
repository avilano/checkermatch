

function randPattern(RandBoard) {
  for (var i = 0; i < RandBoard.length; i++) {
    for (var j = 0; j < RandBoard.length; j++){
      RandBoard[i][j] = Math.floor(Math.random() * (2 - 0 + 1)) + 0; // syntax(max - min + 1)) + min
      }
    }
  return RandBoard;
}

function isConsecutive(a,b,c,d) {
  return ( (a !== 0)&&(a==b)&&(a==c)&&(a==d)&&(b==c)&&(c==d) );
}

function mainCheck(tile) { // note that j is X-coordinate and i is Y-coordinate

  //array for matched tiles
  var matchedArr = [];

  //checks vertically
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < tile.length; j++) {
      if ( isConsecutive(tile[i][j], tile[i+1][j], tile[i+2][j], tile[i+3][j]) ) {
          matchedArr.push(["down",j+1,i+1]);
      }
    }
  }
  //checks horizontally
  for (var i = 0; i  < tile.length; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i][j+1], tile[i][j+2], tile[i][j+3] )) {
          matchedArr.push(["right",j+1,i+1]);
      }
    }
  }
  //checks diagonally-right
  for (var i = 0; i  < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i+1][j+1], tile[i+2][j+2], tile[i+3][j+3] )) {
          matchedArr.push(["diagright",j+1,i+1]);
      }
    }
  }
  //checks diagonally-left
  for (var i = 3; i  < 8; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i-1][j+1], tile[i-2][j+2], tile[i-3][j+3] )) {
          matchedArr.push(["diagleft",j+1,i+1]);
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
var randomizedArr = randPattern(checkerArr);

console.log("This is a randomized 8X8 Checker board [0 are blanks, 1 are blacks, 2 are reds] :");
console.log(randomizedArr);
console.log("-------------------------------");
console.log("Here are the places where you have 4 similar tiles in a row:");
console.log(mainCheck(randomizedArr));
