import React from 'react'
import TableData from './TableData'

interface Movie {
    id: number
    title: string
    movie_rate: string
    netizen_rate: number
    netizen_count?: number
    journalist_score: number
    journalist_count?: number
    playing_time: string
    opening_date: string
    image: string
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
