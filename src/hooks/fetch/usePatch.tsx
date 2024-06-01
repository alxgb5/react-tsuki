import { useState, useCallback } from 'react';

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
const usePatch = <T, U>(
  url: string
): {
  patchData: (data: T) => Promise<void>;
  response: U | null;
  loading: boolean;
  error: Error | null;
} => {
  const [response, setResponse] = useState<U | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Sends a PATCH request with the provided data.
   *
   * @param {T} data - The data to be sent in the request body.
   * @returns {Promise<void>} - A promise that resolves when the request is complete.
   */
  const patchData = useCallback(
    async (data: T) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, {
          method: 'PATCH',
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

  return { patchData, response, loading, error };
};

export default usePatch;
