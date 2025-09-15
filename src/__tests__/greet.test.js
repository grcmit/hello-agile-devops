const { greet } = require('../greet');

test('returns expected greeting', () => {
  expect(greet('TeamGRC')).toBe('Hello, TeamGRC! Welcome to Agile DevOps.');
});
