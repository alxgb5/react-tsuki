/**
 * Custom hook for making POST requests.
 *
 * @template T - The type of the request payload.
 * @template U - The type of the response data.
 * @param {string} url - The URL to send the POST request to.
 * @returns {{
 *   postData: (data: T) => Promise<void>;
 *   response: U | null;
 *   loading: boolean;
 *   error: Error | null;
 * }} - An object containing the postData function, response data, loading state, and error state.
 */
declare const usePost: <T, U>(url: string) => {
    postData: (data: T) => Promise<void>;
    response: U | null;
    loading: boolean;
    error: Error | null;
};
export default usePost;
//# sourceMappingURL=usePost.d.ts.map