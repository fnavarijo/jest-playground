import { sum } from '../src';

test('1 + 2 to be equal 3', () => {
  expect(sum(1,2)).toBe(3);
})

// test('1 + 2 to be equal 3 (type check)', () => {
//   expect(sum(1,'2')).toBe(3);
// })