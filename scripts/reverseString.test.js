import { reverse } from './reverseString'

test('reverses a word', () => {
  expect(reverse('word')).toBe('drow');
})

test('reverses a sentence', () => {
  expect(reverse('This is a sentence.')).toBe('.ecnetnes a si sihT');
})
