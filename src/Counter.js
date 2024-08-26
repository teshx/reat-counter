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
      <div className="container">
        <h1 className="number">{Count}</h1>
      </div>
      <section className="button-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </section>
    </>
  );
}

export default Counter;
