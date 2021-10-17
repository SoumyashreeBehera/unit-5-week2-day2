import React, { useContext, useState } from "react";
import { ApiContext } from "../Context/ApiContextProvider";

export default function Todos() {
  const { state, dispatchAddTodo, isLoading, isError } = useContext(ApiContext);
  const [inputValue, setInputValue] = useState("");

  return isLoading ? (
    <div>...Loading</div>
  ) : isError ? (
    <div>Error occured</div>
  ) : (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="add new todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            dispatchAddTodo(inputValue);
          }}
        >
          Add New Todo
        </button>
      </div>
      <div>
        {state.todos.map((el) => (
          <div>{el.title}</div>
        ))}
      </div>
    </div>
  );
}
