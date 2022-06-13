import React from 'react'
import { useLocation } from 'react-router-dom'

interface Movie {
    id: number,
    title: string
    movie_rate: string
    director: string,
    actor: string,
    genre: string,
    netizen_rate: number,
    netizen_count: number,
    journalist_score: number,   
    journalist_count: number,
    playing_time: string,
    opening_date: string,
    image: string
}

interface LocationState {
    pathname: string
    state: Movie
}

const MovieDetail = () => {
    const location = useLocation() as LocationState

    return (
        <div>
            <h2>영화 설명</h2>
            <div>
                <table className="listTable">
                    <tbody>
                        <tr>
                            <td className="listTableIndex">{location.state.title}</td>
                            <td className="listTableIndex">{location.state.movie_rate}</td>
                            <td className="listTableIndex">{location.state.genre}</td>
                            <td className="listTableIndex">{location.state.director}</td>
                            <td className="listTableIndex">{location.state.actor}</td>
                            <td className="listTableIndex">{location.state.playing_time}</td>
                            <td className="listTableIndex">{location.state.journalist_count}</td>
                            <td className="listTableIndex">{location.state.journalist_score}</td>
                            <td className="listTableIndex">{location.state.netizen_count}</td>
                            <td className="listTableIndex">{location.state.netizen_rate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieDetail
