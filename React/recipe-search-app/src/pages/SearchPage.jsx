import React, { useState } from 'react'
import { getRecipes } from '../services/api';
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';
import { useRecipeContext } from '../context/RecipeContext';

function SearchPage() {
    const { state, dispatch } = useRecipeContext();
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        const data = await getRecipes(query);
        dispatch({ type: 'SET_RECIPES', payload: data.results });
    }

    return (
        <div className='p-4'>
            <div className='container mx-auto'>
                <div className='mb-4'>
                    <input
                        type='text'
                        placeholder='Search recipes...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className='border rounded w-full px-4 py-2'
                    ></input>
                    <button onClick={handleSearch} className='bg-blue-600 text-white px-4 py-2' > Search</button>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {state.recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default SearchPage