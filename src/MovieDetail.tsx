import React from 'react'
import { useLocation } from 'react-router-dom'

interface Movie {
    director: string,
    enter_date: string,
    id: number,
    image: string
    journalist_count: number,
    journalist_score: number,   
    movie_rate: string
    netizen_count: number,
    netizen_rate: number,
    opening_date: string,
    playing_time: string,
    scope: string,
    title: string
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
                            <td className="listTableIndex">{location.state.scope}</td>
                            <td className="listTableIndex">{location.state.director}</td>
                            <td className="listTableIndex">{location.state.playing_time}</td>
                            <td className="listTableIndex">{location.state.movie_rate}</td>
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
