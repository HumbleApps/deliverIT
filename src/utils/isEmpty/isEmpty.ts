/**
 * isEmpty - check for empty or undefined or null values
 *
 * @param source value to check for emptiness
 * @returns a empty flag
 */
const isEmpty = (
  source: null | undefined | string | number | any[] | object,
): boolean => {
  // check for falsy values
  if (source === null || source === undefined) {
    return true;
  }

  // check for 0
  if (source === 0) {
    return true;
  }

  // check for arrays & strings
  if (Array.isArray(source) || typeof source === 'string') {
    return source.length === 0;
  }

  // check for objects
  if (typeof source === 'object') {
    return Object.keys(source).length === 0;
  }

  return false;
};

export default isEmpty;
