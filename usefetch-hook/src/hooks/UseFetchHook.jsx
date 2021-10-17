import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseFetchHook(url, page) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fun = async () => {
      setLoading(true);
      try {
        let res = await axios(url, {
          params: {
            q: "masai",
            page: page,
            per_page: 50,
          },
        });
        console.log(res);
        setLoading(false);
        setCount(res.data.total_count);
        setData(res.data.items);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    fun();
  }, [url, page]);

  return { loading, error, data, count };
}
