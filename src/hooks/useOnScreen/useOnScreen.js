import React, { useEffect, useState } from "react";
/**
 *
 * @param { React.MutableRefObject<undefined>} ref
 */

const useOnScreen = (ref) => {
  const [visible, setVisible] = useState(false);

  const node = ref.current;
  useEffect(() => {
    if (node == null) return;
    const observable = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          entry.target.style = "background-color:red";
        } else {
          setVisible(false);
          entry.target.style = "background-color:blue";
        }
      },
      { threshold: 1 }
    );

    observable.observe(node);

    return () => {
      setVisible(false);

      observable.unobserve(node);
    };
  }, [node]);

  return visible;
};

export default useOnScreen;
