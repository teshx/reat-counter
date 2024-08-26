import React, { useState } from "react";
function Counter() {
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(() => Count + 1);
  };
  const decrement = () => {
    setCount(() => {
      return Count - 1;
    });
  };
  return (
    <>
      <div className="counter">
        <h1 className="numbeer">{Count}</h1>
      </div>
      <section className="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </section>
    </>
  );
}

export default Counter;
