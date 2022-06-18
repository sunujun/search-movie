import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface LocationState {
    pathname: string
    state: ReviewData
}

interface ReviewData {
    mv_code: number
    r_name: string
    r_title: string
    r_posted_date: string
    r_text: string
}

const Review = () => {
    const location = useLocation() as LocationState

    return (
        <div style={{ margin: '50px' }}>
            <h2 style={{ marginBottom: '30px' }}>{location.state.r_title}</h2>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
                <h5 style={{ marginRight: '30px' }}>{location.state.r_name}</h5>
                <h5>
                    {location.state.r_posted_date && location.state.r_posted_date.substring(0, 10) !== '0000-00-00'
                        ? new Date(
                              Date.UTC(
                                  Number(location.state.r_posted_date.substring(0, 4)),
                                  Number(location.state.r_posted_date.substring(5, 7)) - 1,
                                  Number(location.state.r_posted_date.substring(8, 10)) + 1,
                              ),
                          )
                              .toISOString()
                              .substring(0, 10) + ' 작성'
                        : ''}
                </h5>
            </div>
            <h4>{location.state.r_text}</h4>
        </div>
    )
}

export default Review
