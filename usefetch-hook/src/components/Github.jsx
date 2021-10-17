import React, { useState } from "react";
import UseFetchHook from "../hooks/UseFetchHook";

export default function Github() {
  const [page, setPage] = useState(1);

  const { data, loading, error, count } = UseFetchHook(
    "https://api.github.com/search/users?q=masai",
    page
  );
  return loading ? (
    <div>...Loading</div>
  ) : error ? (
    <div>error</div>
  ) : (
    <>
      {data.map((el, i) => (
        <div key={i}>{el.login}</div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button
        disabled={page === Math.ceil(count / 50)}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
}
