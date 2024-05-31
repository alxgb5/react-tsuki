/**
 * Creates a debounced version of the provided function.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to wait before invoking the debounced function.
 * @returns A debounced version of the provided function.
 */
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

export default debounce;
