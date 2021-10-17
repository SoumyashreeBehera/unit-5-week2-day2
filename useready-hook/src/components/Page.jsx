import React from "react";
import useReady from "../hooks/useReadyHook";

export default function Page() {
  const { ready } = useReady(3000);
  return ready ? <div>Hello </div> : <div>Hold on</div>;
}
