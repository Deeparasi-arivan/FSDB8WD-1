import React, { useState, useEffect } from 'react'
import Memo from './Memo';

function App() {

  // let count = 0; // Regular variable, not tracked by React
  const [count, setCount] = useState(0);
  const [countBy2, setCountBy2] = useState(0); // useState hook to manage state
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   console.log("products fetched from DB!!!");
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, []);



  const incrementByTwo = () => {
    setCountBy2(countBy2 + 2);
  }

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Memo />
      {/* <h1>Count: {count}</h1>
      <h1>Count By 2: {countBy2}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementByTwo}>Increment By 2</button>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div> */}

    </div>
  )
}

export default App
