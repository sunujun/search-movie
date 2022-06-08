import React from 'react'
import TableData from './TableData'

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

const TableRow = (props: { movieDataList: Movie[] }) => {
    return (
        <tbody>
            {props.movieDataList.map(item => {
                return <TableData key={item.id} movie={item} />
            })}
        </tbody>
    )
}

export default TableRow
