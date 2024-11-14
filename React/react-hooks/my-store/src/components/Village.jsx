import React, { useState } from 'react'
import Diary from './Diary';

function Village() {
    const [milk, setMilk] = useState("Milk is ready");
    const [alertmsg, setAlertmsg] = useState('No alert message!!! All good!!');
    function alert(msg) {
        setAlertmsg(msg);
    }
    return (
        <div>
            <h1>Village Component</h1>
            <h2>{alertmsg}</h2>
            <hr />
            <Diary msg={milk} alert={alert}></Diary>
        </div>
    )
}

export default Village