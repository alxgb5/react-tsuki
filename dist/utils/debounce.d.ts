/**
 * Creates a debounced version of the provided function.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to wait before invoking the debounced function.
 * @returns A debounced version of the provided function.
 */
declare function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void;
export default debounce;
//# sourceMappingURL=debounce.d.ts.map