import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Run effect ONLY when count changes
  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); // Dependency array

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Counter App</h2>
      <h3>{count}</h3>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

export default Counter;
