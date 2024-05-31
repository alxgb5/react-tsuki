/**
 * Custom hook for making GET requests.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to fetch the data from.
 * @returns {Object} - An object containing the response data, loading state, and error state.
 * @property {T | null} data - The response data.
 * @property {boolean} loading - A boolean indicating if the request is in progress.
 * @property {Error | null} error - The error object, if any.
 */
declare const useGet: <T>(url: string) => {
    data: T | null;
    loading: boolean;
    error: Error | null;
};
export default useGet;
//# sourceMappingURL=useGet.d.ts.map