import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='bg-blue-600 p-4 text-white'>
            <div className='container mx-auto flex justify-between'>
                <h1 className='text-xl font-bold'>Recipe Finder</h1>
                <nav>
                    <Link to='/' className='mr-4'>Search</Link>
                    <Link to='/favorites'>Favorites</Link>
                </nav>
            </div>

        </header>
    )
}

export default Header