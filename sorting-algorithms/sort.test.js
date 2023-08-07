const selectionSort = require('./selectionSort');

const func = selectionSort;

describe('sort', () => {
  test('on empty array', () => {
    const arr = [];
    const result = [];
    expect(func(arr)).toEqual(result);
  });

  test('on single element', () => {
    const arr = [12];
    const result = [12];
    expect(func(arr)).toEqual(result);
  });

  test('even length array', () => {
    const arr = [3, 1, 2, 4];
    const result = [1, 2, 3, 4];
    expect(func(arr)).toEqual(result);
  });

  test('odd length array', () => {
    const arr = [3, 1, 2];
    const result = [1, 2, 3];
    expect(func(arr)).toEqual(result);
  });

  test('on two elements', () => {
    const arr = [12, 24];
    const result = [12, 24];
    expect(func(arr)).toEqual(result);
  });

  test('on duplicates', () => {
    const arr = [3, 2, 2, 1, 2];
    const result = [1, 2, 2, 2, 3];
    expect(func(arr)).toEqual(result);
  });
});
