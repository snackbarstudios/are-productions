import { throttle } from "lodash";
import { useLayoutEffect, useState } from "react";

/* Basic scroll utility function scaffolding */

function useDocumentScrollThrottled(callback) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 100);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, [handleDocumentScrollThrottled]);
}

export default useDocumentScrollThrottled;
