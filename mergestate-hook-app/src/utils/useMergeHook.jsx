import React, { useState } from "react";

function useMerge(data) {
  let [state, setState] = useState(data);
  let fun = (el) => {
    setState((prev) => {
      return {
        ...prev,
        ...el,
      };
    });
  };

  return [state, fun];
}

export default useMerge;
