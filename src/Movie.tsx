import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router'
import MovieDetail from './MovieDetail'
import Review from './Review'

const Movie = () => {
    return (
        <Routes>
            <Route path=":movie_id" element={<MovieDetail />} />
            <Route path=":movie_id/review/*" element={<Review />} />
        </Routes>
    )
}

export default Movie
