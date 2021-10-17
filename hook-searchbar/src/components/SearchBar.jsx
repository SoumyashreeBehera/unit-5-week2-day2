import React, { useState } from "react";
import { Container } from "@mui/material";
import useFetch from "../utils/useFetchHook";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  let { data } = useFetch(`http://localhost:3001/country`, inputValue, 300);

  return (
    <Container maxWidth="sm">
      <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      </div>
      <div>
        {typeof data === "object" && data.map((el) => <div>{el.country}</div>)}
      </div>
    </Container>
  );
}
