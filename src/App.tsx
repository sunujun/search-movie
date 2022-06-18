import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './MovieList'
import Movie from './Movie'

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie/*" element={<Movie />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App
