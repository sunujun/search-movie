import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
import Header from './Header'

const App = () => {
    return (
        <BrowserRouter>
            <Header text='Movie List' />
            <div className="app">
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie/*" element={<MovieDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App
