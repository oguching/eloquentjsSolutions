// Chessboard.

let pattern = '';


function printChessBoard (size) {
  for (let i = 0; i < size; i++) {
    
    for (let j = 1; j < size + 1; j++) {
      if ((j + i ) % 2 == 0) {
        pattern = pattern + '#'
      } else {
        pattern = pattern + ' '
      }
    }
  
  console.log(pattern)
  pattern = ''  
  }
}
printChessBoard(8)
