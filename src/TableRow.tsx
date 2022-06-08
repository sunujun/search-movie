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
                return (
                    <TableData
                        key={item.id}
                        title={item.title}
                        movie_rate={item.movie_rate}
                        scope={item.scope}
                        playing_time={item.playing_time}
                        opening_date={item.opening_date}
                        director={item.director}
                        netizen_rate={item.netizen_rate}
                        journalist_score={item.journalist_score}
                    />
                )
            })}
        </tbody>
    )
}

export default TableRow
