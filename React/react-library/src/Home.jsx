import React, { useState, useRef } from 'react'

function Home() {
    const [count, setCount] = useState(0);

    const inputRef = useRef(null);
    console.log("inputRef", inputRef)
    const renderCount = useRef(0);

    const handleClick = () => {
        setCount(count + 1);
        renderCount.current += 1;
    }

    const focusInput = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>useRef Example</h1>

            <p>Button clicked {count} times</p>
            <p>Component rendered {renderCount.current} times</p>

            <button onClick={handleClick}>Increment</button>
            <button onClick={focusInput}>Focus Input</button>

            <br />

            <input type="text" ref={inputRef} placeholder='Click the button to focus' />
        </div>
    )
}

export default Home