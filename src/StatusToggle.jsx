import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      <div style={{ marginTop: "20px" }}>
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
}

export default StatusToggle;
