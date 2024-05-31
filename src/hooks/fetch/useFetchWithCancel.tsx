import { useState, useEffect } from "react";

/**
 * Custom hook for making fetch requests with the ability to cancel the request.
 *
 * @template T - The type of the response data.
 * @param {string} url - The URL to fetch the data from.
 * @returns {{
 *   data: T | null;
 *   loading: boolean;
 *   error: Error | null;
 *   cancel: () => void;
 * }} - An object containing the fetched data, loading state, error state, and a cancel function.
 */
const useFetchWithCancel = <T,>(
  url: string
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  cancel: () => void;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [controller] = useState(() => new AbortController());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, controller]);

  return { data, loading, error, cancel: () => controller.abort() };
};

export default useFetchWithCancel;
