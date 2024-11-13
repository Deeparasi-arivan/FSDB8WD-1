import React, { useEffect, useMemo, useState } from 'react'

function Memo() {
    const [num, setNum] = useState(10);
    const [logValue, setLogValue] = useState('');

    function fib(num) {
        if (num === 2) return 1;
        if (num === 1) return 0;
        return fib(num - 1) + fib(num - 2);
    }

    const fibResult = useMemo(() => {
        console.log('Calculating Fibonacci...');
        return fib(num)
    }, [num]);

    return (
        <div>
            <h1>Fibonacci of {num} is {fibResult}</h1>
            <input
                type='number'
                value={num}
                onChange={(event) => setNum(parseInt(event.target.value))}
            />

            <input
                type='text'
                value={logValue}
                onChange={(event) => setLogValue(event.target.value)}
            />

            <button onClick={() => console.log(logValue)}>Log Value</button>
        </div>
    )
}



export default Memo