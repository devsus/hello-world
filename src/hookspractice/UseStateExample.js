import React from "react";
import { useState } from "react";

function UseStateExample() {
  const [color, setColor] = useState("Red");
  function changeState() {
    setColor("Blue");
  }

  return (
    <div>
      <h1>current useState color is {color}</h1>
      {/* update state using button */}
      <button type="button" onClick={changeState}>
        Chnaging State
      </button>
    </div>
  );
}

export default UseStateExample;
