import React, { useState } from "react";

function Calculator() {
  const keys = [
    "AC",
    "B",
    "%",
    "+",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "%",
    0,
    ".",
    "=",
  ];

  const [value, setValue] = useState("");

  const handleClick = (key) => {
    if (["AC", "B", "="].includes(key)) {
      if (key === "AC") {
        setValue("");
      }
      if (key === "B") {
        setValue((value) => value.toString().slice(0, -1));
      }
      if (key === "=") {
        // eslint-disable-next-line no-eval
        setValue(eval(value));
      }
    } else {
      setValue((value) => value.toString() + key.toString());
    }
  };
  return (
    <div>
      <div>Calculator</div>
      <div id="displayArea">{value}</div>
      <div id="keyArea">
        {keys.map((k, i) => (
          <button key={i} onClick={() => handleClick(k)}>
            {k}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
