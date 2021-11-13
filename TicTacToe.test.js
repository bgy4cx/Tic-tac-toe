const {TicTacToe, guardians} = require('./TicTacToe'); 

test('Are they strings?', () => {
  expect(guardians(12345,'Player1234')).toBe(false);
});