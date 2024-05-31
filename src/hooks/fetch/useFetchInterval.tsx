import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for fetching data at a specified interval.
 *
 * @template T - The type of the data to be fetched.
 * @param {string} url - The URL to fetch the data from.
 * @param {number} interval - The interval (in milliseconds) at which to fetch the data.
 * @returns {{ data: T | null; loading: boolean; error: Error | null }} - An object containing the fetched data, loading state, and error state.
 */
const useFetchInterval = <T,>(
  url: string,
  interval: number
): { data: T | null; loading: boolean; error: Error | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = async () => {
      setLoading(true);
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
  }, [url]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };
    if (interval !== null) {
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);

  return { data, loading, error };
};

export default useFetchInterval;
