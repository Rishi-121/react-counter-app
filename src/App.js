import React, { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count++)}>+</button>
      <button onClick={() => count >= 0 && setCount(count--)}>-</button>
    </div>
  );
}
