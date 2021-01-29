import { calculator } from './calculator'

test('adds numbers', () => {
  expect(calculator.add(6, 2)).toBe(8);
})

test('subtracts numbers', () => {
  expect(calculator.subtract(6, 2)).toBe(4);
})

test('multiplies numbers', () => {
  expect(calculator.multiply(6, 2)).toBe(12);
})

test('divides numbers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
})
