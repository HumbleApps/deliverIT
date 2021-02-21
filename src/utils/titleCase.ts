/**
 * Transforms string into title case
 *
 * @param str - source string
 * @param separator - char to separate string by
 * @param joiner - char to join string with
 * @return formatted string
 */
const titleCase = (str = '', separator = '_', joiner = ' ') => {
  const arr = str.split(separator);

  return arr
    .map((item) => `${item.charAt(0).toUpperCase()}${item.substr(1)}`)
    .join(joiner);
};

export default titleCase;
