import { useState, useEffect } from 'react';

/**
 * Custom hook that returns a debounced value.
 *
 * @template T - The type of the value.
 * @param {T} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds before updating the debounced value.
 * @returns {T} - The debounced value.
 */
const useDebouncedValue = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebouncedValue;
