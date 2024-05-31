/**
 * Merges multiple objects into a single object.
 * @param objects - The objects to merge.
 * @returns The merged object.
 * @template T - The type of the objects being merged.
 */
const mergeObjects = <T>(...objects: T[]): T => {
  /**
   * Checks if a value is an object.
   * @param obj - The value to check.
   * @returns True if the value is an object, false otherwise.
   */
  const isObject = (obj: any) => obj && typeof obj === "object";

  return objects.reduce((prev, obj) => {
    Object.keys(obj as {}).forEach((key) => {
      const pVal = (prev as any)[key];
      const oVal = (obj as any)[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        (prev as any)[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        (prev as any)[key] = mergeObjects(pVal, oVal);
      } else {
        (prev as any)[key] = oVal;
      }
    });

    return prev;
  }, {} as T);
};

export default mergeObjects;
