import React, { useState } from "react";

function HooksCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* here we can update state based on previous values */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Inncrement
      </button>
      {/* we can use like this also
      <button onClick={() => setCount(count + 1)}>Inncrement</button> */}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Inncrement 5</button>
    </div>
  );
}

export default HooksCounterTwo;
