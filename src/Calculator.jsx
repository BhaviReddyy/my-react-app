import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]); // stores multiple results

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Please enter valid numbers!");
      return;
    }

    let result = 0;

    if (operation === "add") result = n1 + n2;
    if (operation === "subtract") result = n1 - n2;
    if (operation === "multiply") result = n1 * n2;

    // Append result instead of replacing
    setResults([...results, result]);
  };

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Basic Calculator</h2>

      <input
        type="number"
        value={num1}
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />

      <input
        type="number"
        value={num2}
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: "10px", padding: "5px" }}
      />

      <br />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={{ padding: "5px", margin: "10px" }}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <br />

      <button
        onClick={handleCalculate}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        Perform Action
      </button>

      <h3>Results:</h3>

      {results.map((res, index) => (
        <p key={index}>Result {index + 1}: {res}</p>
      ))}
    </div>
  );
}

export default Calculator;
