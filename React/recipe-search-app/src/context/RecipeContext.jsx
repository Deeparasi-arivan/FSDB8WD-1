import React, { createContext, useReducer, useContext } from 'react';
import recipeReducer from './recipeReducer';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const initialState = {
        recipes: [],
        favorites: [],
        filter: "all",
    }

    const [state, dispatch] = useReducer(recipeReducer, initialState);

    return (
        <RecipeContext.Provider value={{ state, dispatch }}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipeContext = () => useContext(RecipeContext);