const { greet } = require('../greet');

test('returns expected greeting', () => {
  expect(greet('Team')).toBe('Hello, Team! Welcome to Agile DevOps.');
});
