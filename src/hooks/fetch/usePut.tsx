import { useState, useCallback } from 'react';

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
const usePut = <T, U>(
  url: string
): {
  putData: (data: T) => Promise<void>;
  response: U | null;
  loading: boolean;
  error: Error | null;
} => {
  const [response, setResponse] = useState<U | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Sends a PUT request with the provided data.
   *
   * @param {T} data - The data to send in the request body.
   * @returns {Promise<void>} - A Promise that resolves when the request is complete.
   */
  const putData = useCallback(
    async (data: T) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, {
          method: 'PUT',
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

  return { putData, response, loading, error };
};

export default usePut;
