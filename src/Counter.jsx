import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>{count}</h3>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", fontSize: "16px", marginTop: "10px" }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
