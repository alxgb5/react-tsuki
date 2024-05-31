/**
 * Custom hook for making fetch requests with the ability to cancel the request.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to fetch the data from.
 * @returns {{
 *   data: T | null;
 *   loading: boolean;
 *   error: Error | null;
 *   cancel: () => void;
 * }} - An object containing the fetched data, loading state, error state, and a cancel function.
 */
declare const useFetchWithCancel: <T>(url: string) => {
    data: T | null;
    loading: boolean;
    error: Error | null;
    cancel: () => void;
};
export default useFetchWithCancel;
//# sourceMappingURL=useFetchWithCancel.d.ts.map