import React from "react";
import useMerge from "../utils/useMergeHook";

let initState = {
  uname: "",
  email: "",
};

export default function Form() {
  const [nameInput, setNameInout] = useMerge({ uname: "" });
  const [state, setState] = useMerge(initState);
  const [emailInput, setEmailInput] = useMerge({ email: "" });
  console.log("from Form page:", state);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          name="uname"
          value={nameInput.uname}
          onChange={(e) => setNameInout({ uname: e.target.value })}
        />
        <br />
        <input
          type="text"
          name="email"
          value={emailInput.email}
          onChange={(e) => setEmailInput({ email: e.target.value })}
        />
        <br />
        <button
          onClick={() =>
            setState({ uname: nameInput.uname, email: emailInput.email })
          }
        >
          Add Data
        </button>
      </div>
      <div>name:{state.uname}</div>
      <div>email:{state.email}</div>
    </>
  );
}
