import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const changeColor = () => {
    setIsRed(!isRed); // toggles between true/false
  };

  return (
    <div>
      <div
        style={{
          width: "200px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      >
        {isRed ? "Red Box" : "Blue Box"}
      </div>

      <button onClick={changeColor}>Toggle Color</button>
    </div>
  );
}

export default ColorToggle;
