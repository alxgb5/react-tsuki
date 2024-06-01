import { useState, useCallback } from 'react';

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
const useDelete = <T,>(
  url: string
): {
  deleteData: () => Promise<void>;
  response: T | null;
  loading: boolean;
  error: Error | null;
} => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Function to send the DELETE request.
   *
   * @returns {Promise<void>} - A promise that resolves when the DELETE request is complete.
   */
  const deleteData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: 'DELETE',
      });
      const result = await res.json();
      setResponse(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { deleteData, response, loading, error };
};

export default useDelete;
