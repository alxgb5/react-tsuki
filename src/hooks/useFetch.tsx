import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data from a URL.
 *
 * @template T - The type of the data to be fetched.
 * @param {string} url - The URL to fetch the data from.
 * @returns {Object} - An object containing the fetched data, loading state, and error state.
 */
const useFetch = <T,>(
  url: string
): { data: T | null; loading: boolean; error: Error | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
