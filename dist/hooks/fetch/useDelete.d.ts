/**
 * Custom hook for making DELETE requests.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to send the DELETE request to.
 * @returns {{
 *   deleteData: () => Promise<void>;
 *   response: T | null;
 *   loading: boolean;
 *   error: Error | null;
 * }} - An object containing the deleteData function, response data, loading state, and error state.
 */
declare const useDelete: <T>(url: string) => {
    deleteData: () => Promise<void>;
    response: T | null;
    loading: boolean;
    error: Error | null;
};
export default useDelete;
//# sourceMappingURL=useDelete.d.ts.map