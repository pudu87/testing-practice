import { caesarCipher } from './caesarCipher'

test('goes forward', () => {
  expect(caesarCipher('word', 1)).toBe('xpse');
})

test('goes backwards', () => {
  expect(caesarCipher('word', -2)).toBe('umpb');
})

test('goes from z to a', () => {
  expect(caesarCipher('word', 5)).toBe('btwi');
})

test('goes from a to z', () => {
  expect(caesarCipher('word', -5)).toBe('rjmy');
})

test('handles big shifts', () => {
  expect(caesarCipher('word', 27)).toBe('xpse');
})

test('respects the case', () => {
  expect(caesarCipher('Word', 1)).toBe('Xpse');
})

test('does not alter punctuation', () => {
  expect(caesarCipher('word, word, word!', 1)).toBe('xpse, xpse, xpse!');
})
