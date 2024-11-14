import React, { useState } from "react"
import { useCallback } from "react";
import { useMemo } from "react";


function App() {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");

  // A slow function that simulates an expensive calculation based on the count
  const slowCalcuation = (num) => {
    console.log("Running slow calculation.....");
    for (let i = 0; i < 1000000000; i++) { } // Artificial delay
    return num * 2;
  }

  const calculatedValue = useMemo(() => slowCalcuation(count), [count]);

  const fetchMessage = useCallback(() => {
    console.log("Fetching message....");
    setMessage("Hello from fetchMessage");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React useMemo and useCallback Example</h1>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <p>Calculated Value: {calculatedValue}</p>
      </div>

      <div>
        <h2>Message: {message}</h2>
        <button onClick={fetchMessage}>Fetch Message</button>
      </div>
    </div>
  )
}

export default App
