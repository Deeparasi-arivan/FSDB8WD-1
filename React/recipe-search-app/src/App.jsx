import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecipeProvider } from './context/RecipeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SearchPage from './pages/SearchPage'
import RecipeDetails from './pages/RecipeDetails'
import FavoritesPages from './pages/FavoritesPages'

function App() {

  return (
    <RecipeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesPages />} />
        </Routes>
      </Router>
    </RecipeProvider>
  )
}

export default App
