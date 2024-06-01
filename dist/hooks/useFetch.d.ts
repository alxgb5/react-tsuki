/**
 * Custom hook for fetching data from a URL.
 *
 * @template T - The type of the data to be fetched.
 * @param {string} url - The URL to fetch the data from.
 * @returns {Object} - An object containing the fetched data, loading state, and error state.
 */
declare const useFetch: <T>(url: string) => {
    data: T | null;
    loading: boolean;
    error: Error | null;
};
export default useFetch;
//# sourceMappingURL=useFetch.d.ts.map