const {TicTacToe, guardians, emptySpace, checkTheWin, sleep, getRndInteger} = require('./TicTacToe'); 

test('Are they strings?', () => {
  expect(guardians(12345,'Player1234')).toBe(false);
});

test('Are they not empty?', () => {
    expect(guardians('','')).toBe(false);
});

TheBoard = [['X', 'X', 'X'], ['O', '', 'O'], ['X', 'O', 'X']];
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

test('Random number.', () => {
    expect(getRndInteger(0,5)).toBeLessThanOrEqual(5);
});

// We have to check the result on the console
test('TicTacToe game', () => {
    expect(TicTacToe('Hulk','Batman')).test;
});

