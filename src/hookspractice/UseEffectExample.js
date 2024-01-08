import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 5000);
  });
  return <div>I have rendered {count} ! times</div>;
}

export default UseEffectExample;
