import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for fetching data with retry functionality.
 *
 * @template T - The type of the data being fetched.
 * @param {string} url - The URL to fetch the data from.
 * @param {number} [retries=3] - The number of retries in case of failure.
 * @returns {{
 *   data: T | null;
 *   loading: boolean;
 *   error: Error | null;
 *   retry: () => void;
 * }} - An object containing the fetched data, loading state, error state, and a retry function.
 */
const useRetryFetch = <T,>(
  url: string,
  retries: number = 3
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  retry: () => void;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [attempt, setAttempt] = useState<number>(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err as Error);
      if (attempt < retries) {
        setAttempt((prev) => prev + 1);
      }
    } finally {
      setLoading(false);
    }
  }, [url, attempt, retries]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry: fetchData };
};

export default useRetryFetch;
