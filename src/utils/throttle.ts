/**
 * Creates a throttled version of a function that limits the rate at which the function can be called.
 *
 * @template T - The type of the original function.
 * @param {T} func - The original function to be throttled.
 * @param {number} limit - The time limit (in milliseconds) between function invocations.
 * @returns {(...args: Parameters<T>) => void} - The throttled version of the original function.
 */
const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (...args: Parameters<T>) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export default throttle;
