import React, { useEffect, useState } from "react";

export default function useReady(time) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, time);
    return () => clearTimeout(timer);
  }, []);
  return { ready };
}
