import isEmpty from './isEmpty';

describe('isEmpty util', () => {
  test('should return true for falsy & empty values', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
  });

  test('should return false for truthy values', () => {
    expect(isEmpty({ a: 1 })).toBeFalsy();
    expect(isEmpty([1, 2, 3])).toBeFalsy();
    expect(isEmpty('some')).toBeFalsy();
    expect(isEmpty(() => {})).toBeFalsy();
  });
});
