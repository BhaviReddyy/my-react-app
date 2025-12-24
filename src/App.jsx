import React, { useState, Suspense } from "react";

// Lazy load the heavy component
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>React.memo & Lazy Loading Demo</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <hr />

      <Suspense fallback={<h3>Loading Heavy Component...</h3>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

