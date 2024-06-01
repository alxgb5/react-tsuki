/**
 * Custom hook for fetching data with retry functionality.
 *
 * @template T - The type of the data being fetched.
 * @param {string} url - The URL to fetch the data from.
 * @param {number} [retries=3] - The number of retries in case of failure.
 * @returns {{
 *   data: T | null;
 *   loading: boolean;
 *   error: Error | null;
 *   retry: () => void;
 * }} - An object containing the fetched data, loading state, error state, and a retry function.
 */
declare const useRetryFetch: <T>(url: string, retries?: number) => {
    data: T | null;
    loading: boolean;
    error: Error | null;
    retry: () => void;
};
export default useRetryFetch;
//# sourceMappingURL=useRetryFetch.d.ts.map