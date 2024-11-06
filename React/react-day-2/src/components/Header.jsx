import React from 'react'
import './Header.css'

function Header(props) { // props = {mani:"Phone Directory - Add Users!", parent:"Add Users"}
    return (
        <div className='header'>{props.parent}</div>
    )
}

export default Header