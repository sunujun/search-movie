import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface Movie {
    id: number
    title: string
    movie_rate: string
    netizen_rate: number
    netizen_count?: number
    audience_rate: number
    journalist_score: number
    journalist_count?: number
    playing_time: string
    opening_date: string
    image: string
    s_title: string
    s_text: string
}

interface LocationState {
    pathname: string
    state: ReviewData
}

interface GenreData {
    mv_code: number
    genre: string
}

interface DirectorData {
    mv_code: number
    d_name: string
    d_src: string
}

interface ActorData {
    mv_code: number
    a_name: string
    a_src: string
    a_part: string
    a_role: string
}

interface NationData {
    mv_code: number
    nation: string
}

interface PhotoData {
    mv_code: number
    photo_src: string
}

interface OneLineData {
    mv_code: number
    n_score: number
    audience_check: boolean
    n_name: string
    n_text: string
}

interface ScriptData {
    mv_code: number
    a_role: string
    a_name: string
    s_script: string
}

interface ReviewData {
    mv_code: number
    r_name: string
    r_title: string
    r_posted_date: string
    r_text: string
}

const DetailMainText = styled.h4`
    margin-top: 4px;
    margin-right: 10px;
    font-weight: bold;
`

const DetailText = styled.h4`
    margin-top: 4px;
    margin-right: 10px;
`

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
