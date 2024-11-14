import React from "react";

import { useState, useRef, useCallback, useEffect } from "react";

export function useScrollOffset() {
  const [offsetY, setOffsetY] = useState(0);
  const ticking = useRef(false);
  const promotionsRef = useRef(null);
  const [promotionsOffsetTop, setPromotionsOffsetTop] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        setOffsetY(scrollTop - promotionsOffsetTop);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [promotionsOffsetTop]);

  useEffect(() => {
    if (promotionsRef.current) {
      const rect = promotionsRef.current.getBoundingClientRect();
      setPromotionsOffsetTop(window.pageYOffset + rect.top);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { offsetY, promotionsRef };
}