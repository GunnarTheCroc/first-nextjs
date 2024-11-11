import React, { useState, useEffect } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    function rollovercount() {
      if (count > 10) {
        setCount(0);
      }
    }

    const buttonstyle = {
      backgroundColor: props.color,
      color: "white",
      padding: props.size + "rem",
      borderRadius: "10px",
    };
  
    useEffect(rollovercount, [count]);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1 * props.mult)} style={buttonstyle} >{props.name}</button>
      </div>
    );
  }