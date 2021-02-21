import toQueryString from './toQueryString';

const FILLED_MOCK_QUERY = {
  a: 'a',
  b: 'b',
};

const EMPTY_MOCK_QUERY = {};

describe('toQueryString util', () => {
  test('should return query string for filled query object', () => {
    expect(toQueryString(FILLED_MOCK_QUERY)).toEqual('/?a=a&b=b');
  });

  test('should return empty string for empty query object', () => {
    expect(toQueryString(EMPTY_MOCK_QUERY)).toEqual('');
  });
});
