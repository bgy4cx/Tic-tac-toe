const {TicTacToe, guardians, ShowTheBoard} = require('./TicTacToe'); 

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