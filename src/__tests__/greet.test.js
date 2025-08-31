const { greet } = require('../greet');
test('returns expected greeting', () => {
    expect(greet('GRC')).toBe('Hello, GRC! Welcome to Agile DevOps.');
});

