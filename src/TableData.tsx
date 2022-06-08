import React from 'react'

interface MovieTableData {
    director: string
    journalist_score: number
    movie_rate: string
    netizen_rate: number
    opening_date: string
    playing_time: string
    scope: string
    title: string
}

const TableData = (props: MovieTableData) => {
    return (
        <tr style={{ height: '40px', borderBottom: '1px solid #999999' }}>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {props.title}
            </td>
            <td style={{ textAlign: 'center' }}>{props.movie_rate}</td>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {props.scope}
            </td>
            <td style={{ textAlign: 'center' }}>{props.playing_time}</td>
            <td style={{ textAlign: 'center' }}>{props.opening_date}</td>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {props.director}
            </td>
            <td style={{ textAlign: 'center' }}>{props.netizen_rate === null ? (0).toFixed(2) : props.netizen_rate.toFixed(2)}</td>
            <td style={{ textAlign: 'center' }}>{props.journalist_score === null ? (0).toFixed(2) : props.journalist_score.toFixed(2)}</td>
        </tr>
    )
}

export default TableData
