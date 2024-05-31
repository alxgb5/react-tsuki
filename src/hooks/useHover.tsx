import { useState, useRef, useEffect } from "react";

/**
 * Custom hook that tracks whether an element is being hovered over.
 *
 * @template T - The type of the element being tracked.
 * @returns A tuple containing a ref object and a boolean value indicating whether the element is being hovered over.
 */
const useHover = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return [ref, isHovered];
};

export default useHover;
