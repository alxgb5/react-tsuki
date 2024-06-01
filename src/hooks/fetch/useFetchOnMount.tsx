import { useState, useEffect } from 'react';

/**
 * Custom hook that fetches data from a specified URL when the component mounts.
 * @template T The type of the data to be fetched.
 * @param {string} url The URL to fetch the data from.
 * @returns {Object} An object containing the fetched data, loading state, and error state.
 * @property {T | null} data The fetched data, or null if no data has been fetched yet.
 * @property {boolean} loading A boolean indicating whether the data is currently being fetched.
 * @property {Error | null} error An error object representing any errors that occurred during the fetch.
 */
const useFetchOnMount = <T,>(
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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchOnMount;
