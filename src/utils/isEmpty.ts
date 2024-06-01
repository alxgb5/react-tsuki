/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns Returns `true` if the value is empty, `false` otherwise.
 */
const isEmpty = (value: any): boolean => {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (value && typeof value === 'object') {
    return Object.keys(value).length === 0;
  } else {
    return !value;
  }
};

export default isEmpty;
