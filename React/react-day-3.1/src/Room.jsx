import React from 'react'

function Room(props) {
    // const handleClick = () => {
    //     props.sendMessage("Hello from Room - Manikandan Anbalagan")
    // }
    return (
        <div>
            <h2>Room Component - Child</h2>
            <button onClick={() => {
                props.sendMessage("Hello from Room - Manikandan Anbalagan")
            }}>Send Message</button>
        </div>
    )
}

export default Room