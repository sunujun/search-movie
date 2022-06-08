import React from 'react'

interface MovieTableData {
    director: string,
    journalist_score: number,
    movie_rate: string
    netizen_rate: number,
    opening_date: string,
    playing_time: string,
    scope: string,
    title: string
}

const TableData = (props: MovieTableData) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.movie_rate}</td>
            <td>{props.scope}</td>
            <td>{props.playing_time}</td>
            <td>{props.opening_date}</td>
            <td>{props.director}</td>
            <td>{props.netizen_rate}</td>
            <td>{props.journalist_score}</td>
        </tr>     
    )
}

export default TableData
