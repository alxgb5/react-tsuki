/**
 * Creates a deep clone of the given object.
 *
 * @template T - The type of the object being cloned.
 * @param obj - The object to be cloned.
 * @returns A deep clone of the given object.
 */
const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export default deepClone;
