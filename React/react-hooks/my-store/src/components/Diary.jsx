import React from 'react'

function Diary(props) { // props = {msg: "Milk is ready"}
    return (
        <div className='bg-gray-400'>
            <h1>Diary Factory Component</h1>
            <p>
                <span className='bg-yellow-600'>
                    {props.msg}
                </span>
            </p>
            <button className='bg-red-500' onClick={() => props.alert("Milk is too watery!!!!")}>Alert</button>
        </div>
    )
}

export default Diary