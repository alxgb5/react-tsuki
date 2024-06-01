import { useState, useCallback } from 'react';

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
const usePost = <T, U>(
  url: string
): {
  postData: (data: T) => Promise<void>;
  response: U | null;
  loading: boolean;
  error: Error | null;
} => {
  const [response, setResponse] = useState<U | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Function to send a POST request with the provided data.
   *
   * @param {T} data - The data to be sent in the request body.
   * @returns {Promise<void>} - A promise that resolves when the request is complete.
   */
  const postData = useCallback(
    async (data: T) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        setResponse(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { postData, response, loading, error };
};

export default usePost;
