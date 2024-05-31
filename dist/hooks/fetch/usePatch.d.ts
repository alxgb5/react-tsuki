/**
 * Custom hook for making PATCH requests.
 *
 * @template T - The type of the data to be sent in the request body.
 * @template U - The type of the response data.
 * @param {string} url - The URL to send the PATCH request to.
 * @returns {{
 *   patchData: (data: T) => Promise<void>;
 *   response: U | null;
 *   loading: boolean;
 *   error: Error | null;
 * }} - An object containing the patchData function, response data, loading state, and error state.
 */
declare const usePatch: <T, U>(url: string) => {
    patchData: (data: T) => Promise<void>;
    response: U | null;
    loading: boolean;
    error: Error | null;
};
export default usePatch;
//# sourceMappingURL=usePatch.d.ts.map