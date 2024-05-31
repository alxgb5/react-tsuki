import { useState, useEffect } from "react";

/**
 * Custom hook for making GET requests.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to fetch the data from.
 * @returns {Object} - An object containing the response data, loading state, and error state.
 * @property {T | null} data - The response data.
 * @property {boolean} loading - A boolean indicating if the request is in progress.
 * @property {Error | null} error - The error object, if any.
 */
const useGet = <T,>(
  url: string
): { data: T | null; loading: boolean; error: Error | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
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

export default useGet;
