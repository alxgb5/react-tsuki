/**
 * Converts a snake_case string to camelCase.
 *
 * @param str - The snake_case string to convert.
 * @returns The camelCase version of the input string.
 */
function snakeToCamel(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
}

export default snakeToCamel;
