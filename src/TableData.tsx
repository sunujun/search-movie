import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Movie {
    director: string
    enter_date: string
    id: number
    image: string
    journalist_count: number
    journalist_score: number
    movie_rate: string
    netizen_count: number
    netizen_rate: number
    opening_date: string
    playing_time: string
    scope: string
    title: string
}

const TableData = (props: { movie: Movie }) => {
    const navigate = useNavigate()
    const toMovie = (id: number) => {
        navigate(`/movie/${id}`, { state: props })
    }

    return (
        <tr style={{ height: '40px', borderBottom: '1px solid #999999' }}>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                <a onClick={() => toMovie(props.movie.id)}>{props.movie.title}</a>
            </td>
            <td style={{ textAlign: 'center' }}>{props.movie.movie_rate}</td>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {props.movie.scope}
            </td>
            <td style={{ textAlign: 'center' }}>{props.movie.playing_time}</td>
            <td style={{ textAlign: 'center' }}>{props.movie.opening_date}</td>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {props.movie.director}
            </td>
            <td style={{ textAlign: 'center' }}>
                {props.movie.netizen_rate === null ? (0).toFixed(2) : props.movie.netizen_rate.toFixed(2)}
            </td>
            <td style={{ textAlign: 'center' }}>
                {props.movie.journalist_score === null ? (0).toFixed(2) : props.movie.journalist_score.toFixed(2)}
            </td>
        </tr>
    )
}

export default TableData
