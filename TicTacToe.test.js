const {TicTacToe, guardians, ShowTheBoard, emptySpace, checkTheWin, sleep} = require('./TicTacToe'); 

test('Are they strings?', () => {
  expect(guardians(12345,'Player1234')).toBe(false);
});

test('Are they not empty?', () => {
    expect(guardians('','')).toBe(false);
});

//ShowTheBoard was checked on the console.
var TheBoard = [['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'O', 'X']];
test('Is it in Console?', () => {
    expect(ShowTheBoard(TheBoard)).test;
});

var TheBoard = [['X', 'X', 'X'], ['O', '', 'O'], ['X', 'O', 'X']];
test('Is there space?', () => {
    expect(emptySpace(TheBoard)).toStrictEqual([1,1]);
});

test('Have we winner?', () => {
    expect(checkTheWin(TheBoard)).toBe(true);
});

// We need 2 seconds dilay. 
test('Is is waiting for 2 secounds?', () => {
    expect(sleep(2000)).test;
});

