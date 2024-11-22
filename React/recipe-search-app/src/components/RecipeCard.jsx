import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
    return (
        <div className='border p-4'>
            <img src={recipe.image} alt={recipe.title} className='w-full h-40 object-cover' />
            <h2 className='text-lg font-bold'>{recipe.title}</h2>
            <Link to={`/recipe/${recipe.id}`} className='text-blue-600'>View Details</Link>
        </div>
    )
}

export default RecipeCard