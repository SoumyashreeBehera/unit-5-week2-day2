import React, { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const ApiContext = createContext({
  state: {},
  dispatchGetTodo: () => {},
  dispatchAddTodo: () => {},
});
const initState = {
  todos: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { ...payload }],
      };
    case "GET_TODO":
      return {
        ...state,
        todos: [...payload],
      };
    default:
      return state;
  }
};

export const ApiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    dispatchGetTodo();
  }, []);

  const dispatchGetTodo = async () => {
    setIsLoading(true);
    try {
      let res = await axios.get("http://localhost:3001/todos");
      setIsLoading(false);
      dispatch({ type: "GET_TODO", payload: res.data });
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const dispatchAddTodo = async (title) => {
    setIsLoading(true);
    try {
      let data = { title: title, status: false };
      let res = await axios.post("http://localhost:3001/todos", data);
      setIsLoading(false);
      dispatch({ type: "ADD_TODO", payload: res.data });
      dispatchGetTodo();
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const value = { dispatchAddTodo, dispatchGetTodo, state, isLoading, isError };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
