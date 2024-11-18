import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import DeletePost from "./pages/DeletePost"
import EditPost from "./pages/EditPost"

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center my-4">
            React HTTP Demo</h1>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/delete/:id" element={<DeletePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
