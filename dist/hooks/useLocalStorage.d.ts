/**
 * Custom hook for managing a value in local storage.
 *
 * @template T - The type of the value to be stored in local storage.
 * @param {string} key - The key used to store the value in local storage.
 * @param {T} initialValue - The initial value to be stored in local storage if no value is found.
 * @returns {[T, (value: T) => void]} - A tuple containing the stored value and a function to update the value.
 */
declare const useLocalStorage: <T>(key: string, initialValue: T) => [T, (value: T) => void];
export default useLocalStorage;
//# sourceMappingURL=useLocalStorage.d.ts.map