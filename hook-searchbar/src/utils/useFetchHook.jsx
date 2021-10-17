import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, q, t) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (q === "") {
      return setData([]);
    }
    let timer = setTimeout(() => {
      let fun = async () => {
        let res = await axios.get(url, {
          params: {
            q: q,
          },
        });
        setData(res.data);
      };
      fun();
    }, t);
    return () => clearTimeout(timer);
  }, [q, url]);

  return { data };
}
