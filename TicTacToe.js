function guardians(P1, P2) {
    return (typeof P1 == 'string' && typeof P2 == 'string' && P1 != '' && P2 != '');
}

function ShowTheBoard(board) {
    console.table(board);
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
    return ((/XXX|OOO/g.test(board[0].join(''))) ||
            (/XXX|OOO/g.test(board[1].join(''))) ||  
            (/XXX|OOO/g.test(board[2].join(''))) ||
            (/XXX|OOO/g.test(board[0][0].join('') + board[0][1].join('') + board[0][2].join(''))) ||
            (/XXX|OOO/g.test(board[1][0].join('') + board[1][1].join('') + board[1][2].join(''))) ||
            (/XXX|OOO/g.test(board[2][0].join('') + board[2][1].join('') + board[2][2].join(''))) ||
            (/XXX|OOO/g.test(board[0][0].join('') + board[1][1].join('') + board[2][2].join(''))) ||
             (/XXX|OOO/g.test(board[2][0].join('') + board[1][1].join('') + board[0][2].join(''))))
}

// 1000 is the 1 secound.
function sleep (milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function getRndInteger (max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;    
}

function TicTacToe (P1, P2) {
  if (!guardians(P1, P2)) {
    P1 = 'Player1';
    P2 = 'Player2';  
  }
  var TheBoard = [['', '', ''], ['', '', ''], ['', '', '']]; 
  
}

module.exports = {TicTacToe, guardians, ShowTheBoard, emptySpace, checkTheWin, sleep, getRndInteger};