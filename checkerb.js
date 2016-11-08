

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

for (var i = 0; i < checkerArr.length; i++) {
    for (var j = 0; j < checkerArr.length; j++){
        if ( (i+j)%2 === 0 ) {
          checkerArr[i][j] = 1;
        } else {
          checkerArr[i][j] = 2;
        }
    }
}

console.log(checkerArr);
