import { useEffect } from 'react';

/**
 * Custom hook that triggers a callback when a click event occurs outside of a specified element.
 *
 * @param ref - The ref object that represents the element to watch for click events outside of.
 * @param callback - The callback function to be executed when a click event occurs outside of the element.
 */
const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
