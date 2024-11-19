import React, { useEffect, useRef, useState } from 'react'

function PriceTracker() {
    const [currentPrice, setCurrentPrice] = useState(1000);
    const previousPriceRef = useRef();

    console.log("Before rendereing completion...", previousPriceRef.current);

    useEffect(() => {
        previousPriceRef.current = currentPrice;
        console.log("After rendereing completion...", previousPriceRef.current);
    }, [currentPrice]);

    const prevPrice = previousPriceRef.current;
    return (
        <div>
            <h2>Price Tracker</h2>
            <p>Current Price: ${currentPrice}</p>
            {prevPrice !== undefined && <p>Previous Price: ${prevPrice}</p>}
            <button onClick={() => setCurrentPrice(currentPrice + 10)}>Increase Price</button>
        </div>
    )
}

export default PriceTracker