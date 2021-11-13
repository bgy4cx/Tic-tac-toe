function guardians(P1, P2) {
    return (typeof P1 == 'string' && typeof P2 == 'string' && P1 != '' && P2 != '');
}

// This function the positions of the free spaces. Odd vaule is row's number and the even vaule is the column's number.   
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

function checkTheWin(board) {
    return ((/XXX|OOO/.test(board[0].join(''))) ||
            (/XXX|OOO/.test(board[1].join(''))) ||  
            (/XXX|OOO/.test(board[2].join(''))) ||
            (/XXX|OOO/.test(board[0][0] + board[1][0] + board[2][0])) ||
            (/XXX|OOO/.test(board[0][1] + board[1][1] + board[2][1])) ||
            (/XXX|OOO/.test(board[0][2] + board[1][2] + board[2][2])) ||
            (/XXX|OOO/.test(board[0][0] + board[1][1] + board[2][2])) ||
            (/XXX|OOO/.test(board[2][0] + board[1][1] + board[0][2])) )
}

// 1000 is the 1 secound.
function sleep (milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// This function generates a number between the minimum and the maximum.
function getRndInteger (max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;    
}

function TicTacToe (P1, P2) {
  if (!guardians(P1, P2)) {
    P1 = 'Player1';
    P2 = 'Player2';  
  }
  var TheBoard = [['', '', ''], ['', '', ''], ['', '', '']]; 
  P = P1;
  // It goes while no winner or it has empty space. 
  while (emptySpace(TheBoard).length != 0 && !checkTheWin(TheBoard)) {
      // Players have different signs. 
      if (P == P1) {
          sign = 'X';
      } else {
          sign = 'O';          
      }
      // It counts the empty spaces. 
      let max = emptySpace(TheBoard).length / 2;
      // It chooses an empty space.
      let nextStep = getRndInteger(max, 0);  
      // It fill out the space.
      if (nextStep % 2 == 0) {
         TheBoard[emptySpace(TheBoard)[nextStep]][emptySpace(TheBoard)[nextStep + 1]] = sign;
      } else {
         TheBoard[emptySpace(TheBoard)[nextStep - 1]][emptySpace(TheBoard)[nextStep]] = sign;
      }
      // It shows the player name.
      console.log('Player: ' + P);
      // It shows the board.
      console.table(TheBoard);
      // It waits 2 minutes. 
      sleep(2000);
      // Other player is the next.
      if (P == P1) {
          P = P2;
      } else {
          P = P1;
      }
  }
  // If we have winner, it shows the player's name. 
    if (checkTheWin(TheBoard)) {
        if (P == P1) {
            P = P2;
        } else {
            P = P1;
        }
        console.log('The winner: ' + P);
  } else if (emptySpace(TheBoard).length == 0) {
        console.log('GAME ENDS WITH A DRAW!')
  } 
}

module.exports = {TicTacToe, guardians, emptySpace, checkTheWin, sleep, getRndInteger};