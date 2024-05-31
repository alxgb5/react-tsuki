import { useState } from "react";

/**
 * Custom hook for managing a value in local storage.
 *
 * @template T - The type of the value to be stored in local storage.
 * @param {string} key - The key used to store the value in local storage.
 * @param {T} initialValue - The initial value to be stored in local storage if no value is found.
 * @returns {[T, (value: T) => void]} - A tuple containing the stored value and a function to update the value.
 */
const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
