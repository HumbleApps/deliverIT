import isEmpty from '../isEmpty';

/**
 *Transform query object into query string
 *
 * @param queries query params in object format
 * @returns query string
 */
const toQueryString = (queries: object = {}): string => {
  let queryStr = '';

  if (isEmpty(queries)) {
    return queryStr;
  }

  queryStr = Object.entries(queries).reduce((accumulator, q) => {
    let acc = accumulator.length ? `${accumulator}&` : '/?';

    acc += `${q[0]}=${q[1]}`;
    return acc;
  }, '');

  return queryStr;
};

export default toQueryString;
