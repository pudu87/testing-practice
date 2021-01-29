import { expect, test } from '@jest/globals'
import { capitalize } from './capitalize'

test('takes a word and capitalizes', () => {
  expect(capitalize('word')).toBe('Word');
})

test('takes a sentence and capitalizes', () => {
  expect(capitalize('this is a sentence.')).toBe('This is a sentence.');
})

test('accepts an already capitalized string', () => {
  expect(capitalize('Word')).toBe('Word');
})