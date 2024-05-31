import { useState, useCallback } from "react";

/**
 * A custom hook that provides a boolean state value and a function to toggle the state value.
 *
 * @param initialValue - The initial value of the boolean state. Defaults to `false`.
 * @returns A tuple containing the boolean state value and the toggle function.
 */
const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  /**
   * Toggles the boolean state value.
   */
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
};

export default useToggle;
