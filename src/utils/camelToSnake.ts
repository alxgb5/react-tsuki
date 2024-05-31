/**
 * Converts a camelCase string to snake_case.
 *
 * @param str - The camelCase string to convert.
 * @returns The snake_case representation of the input string.
 */
function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export default camelToSnake;
