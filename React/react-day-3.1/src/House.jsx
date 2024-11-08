import React from 'react'
import Room from './Room'

function House() {
    // function to receive mesage from Room(child)
    const receiveMessage = (message) => {
        console.log("Message from room:", message)
    }
    return (
        <div>
            <h1>House Component - Parent</h1>
            <Room sendMessage={receiveMessage} />
        </div>
    )
}

export default House