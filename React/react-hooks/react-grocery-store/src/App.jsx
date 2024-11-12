import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [prices, setPrices] = useState({ apples: 200, bananas: 150 });
  const [count, setCount] = useState(0);

  const updatePrices = () => {
    setPrices({ apples: 300, bananas: 200 });
  }

  const updateCount = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('Prices updated');
  }, [prices]); //  Dependancy array - re-render when prices change

  useEffect(() => {
    console.log('Count updated');
  }, []); // Empty dependancy array - initial render only

  return (
    <div>
      <h1>React Grocery Store</h1>
      <div>
        <p>Apples: {prices.apples}</p>
        <p>Bananas: {prices.bananas}</p>
      </div>
      <button onClick={updatePrices}>Update Prices</button>
      <button onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default App
