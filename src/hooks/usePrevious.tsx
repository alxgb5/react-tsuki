import { useRef, useEffect } from 'react';

/**
 * Returns the previous value of the provided value.
 *
 * @template T - The type of the value.
 * @param {T} value - The value to track.
 * @returns {T | undefined} - The previous value.
 */
const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
