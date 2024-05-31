/**
 * Custom hook for making PUT requests.
 *
 * @template T - The type of the request payload.
 * @template U - The type of the response data.
 * @param {string} url - The URL to send the PUT request to.
 * @returns {{
 *   putData: (data: T) => Promise<void>;
 *   response: U | null;
 *   loading: boolean;
 *   error: Error | null;
 * }} - An object containing the putData function, response data, loading state, and error state.
 */
declare const usePut: <T, U>(url: string) => {
    putData: (data: T) => Promise<void>;
    response: U | null;
    loading: boolean;
    error: Error | null;
};
export default usePut;
//# sourceMappingURL=usePut.d.ts.map