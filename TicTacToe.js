function guardians(P1, P2) {
    return (typeof P1 == 'string' && typeof P2 == 'string' && P1 != '' && P2 != '');
}

function ShowTheBoard(board) {
    console.table(board);
}

function emptySpace(board) {
    output = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
              output.push(i);
              output.push(j);
            }
        }
    }
    return output;
}

function TicTacToe (P1, P2) {
  if (!guardians(P1, P2)) {
    P1 = 'Player1';
    P2 = 'Player2';  
  }
  var TheBoard = [['', '', ''], ['', '', ''], ['', '', '']]; 
  
}

module.exports = {TicTacToe, guardians, ShowTheBoard, emptySpace};