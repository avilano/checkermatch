
// Randomizes the 2D Array
function randPattern(RandBoard) {
  for (var i = 0; i < RandBoard.length; i++) {
    for (var j = 0; j < RandBoard.length; j++){
      RandBoard[i][j] = Math.floor(Math.random() * (2 - 0 + 1)) + 0; // syntax(max - min + 1)) + min
      }
    }
  return RandBoard;
}

//Checks if consecutive tiles are equal
function isConsecutive(a,b,c,d) {
  return ( (a !== 0)&&(a===b)&&(a===c)&&(a===d)&&(b===c)&&(c===d) );
}

function mainCheck(tile) { // note that j is X-coordinate and i is Y-coordinate

  //array for matched tiles
  var matchedArr = [];

  //checks vertically
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < tile.length; j++) {
      if ( isConsecutive(tile[i][j], tile[i+1][j], tile[i+2][j], tile[i+3][j]) && tile[i][j]===1 ) {
          matchedArr.push(["Black | Vertically Down from:",j+1,i+1]);
      } else if ( isConsecutive(tile[i][j], tile[i+1][j], tile[i+2][j], tile[i+3][j]) && tile[i][j]===2 ) {
          matchedArr.push(["Red | Vertically Down from:",j+1,i+1]);
      }
    }
  }
  //checks horizontally
  for (var i = 0; i  < tile.length; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i][j+1], tile[i][j+2], tile[i][j+3]) && tile[i][j]===1 ) {
          matchedArr.push(["Black | Horizontally right from:",j+1,i+1]);
      } else if ( isConsecutive(tile[i][j], tile[i][j+1], tile[i][j+2], tile[i][j+3]) && tile[i][j]===2 ) {
          matchedArr.push(["Red | Horizontally right from:",j+1,i+1]);
      }
    }
  }
  //checks diagonally-right
  for (var i = 0; i  < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i+1][j+1], tile[i+2][j+2], tile[i+3][j+3]) && tile[i][j]===1 ) {
          matchedArr.push(["Black | Diagonally Down from:",j+1,i+1]);
      } else if ( isConsecutive(tile[i][j], tile[i+1][j+1], tile[i+2][j+2], tile[i+3][j+3]) && tile[i][j]===2 ) {
          matchedArr.push(["Red | Diagonally Down from:",j+1,i+1]);
      }
    }
  }
  //checks diagonally-left
  for (var i = 3; i  < 8; i++) {
    for (var j = 0; j < 5; j++) {
      if ( isConsecutive(tile[i][j], tile[i-1][j+1], tile[i-2][j+2], tile[i-3][j+3]) && tile[i][j]===1 ) {
          matchedArr.push(["Black | Diagonally Up from:",j+1,i+1]);
      } else if ( isConsecutive(tile[i][j], tile[i-1][j+1], tile[i-2][j+2], tile[i-3][j+3]) && tile[i][j]===1 ) {
          matchedArr.push(["Red | Diagonally Down from:",j+1,i+1]);
      }
    }
  }



  return matchedArr;
}

// Original 2D Array
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


var randomizedArr = randPattern(checkerArr)
var resultArr = mainCheck(randomizedArr)

console.log("This is a randomized 8X8 Checker board [0 are blanks, 1 are blacks, 2 are reds] :");
console.log(randomizedArr);
console.log("-------------------------------");
console.log("There was a total of " + resultArr.length + " places found");
console.log("here is where you have four similar tiles in a row:");
console.log(resultArr);
