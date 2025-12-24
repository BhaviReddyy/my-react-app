import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered!");

  // Simulate heavy UI
  const items = Array.from({ length: 5000 }, (_, i) => (
    <p key={i}>Heavy content item #{i}</p>
  ));

  return (
    <div>
      <h2>Heavy Component Loaded</h2>
      {items}
    </div>
  );
}

// Wrap with React.memo to prevent re-renders
export default React.memo(HeavyComponent);
