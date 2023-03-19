const util = require('./util');

test('validate', () => {
  expect(util.validate(1, 2)).toBe(3);
});

test('validate', () => {
  expect(util.validateFile(1, 2)).toBe(3);
});

test('validate', () => {
  expect(util.validateAuthorized(1, 2)).toBe(3);
});

test('validate', () => {
  expect(util.validateUser(1, 2)).toBe(3);
});
