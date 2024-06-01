/**
 * Custom hook for fetching data at a specified interval.
 *
 * @template T - The type of the data to be fetched.
 * @param {string} url - The URL to fetch the data from.
 * @param {number} interval - The interval (in milliseconds) at which to fetch the data.
 * @returns {{ data: T | null; loading: boolean; error: Error | null }} - An object containing the fetched data, loading state, and error state.
 */
declare const useFetchInterval: <T>(url: string, interval: number) => {
    data: T | null;
    loading: boolean;
    error: Error | null;
};
export default useFetchInterval;
//# sourceMappingURL=useFetchInterval.d.ts.map