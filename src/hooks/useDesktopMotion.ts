"use client";

import { useEffect, useState } from "react";

export default function useDesktopMotion(minWidth = 768) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      `(min-width: ${minWidth}px) and (prefers-reduced-motion: no-preference)`
    );
    const update = () => setEnabled(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, [minWidth]);

  return enabled;
}
