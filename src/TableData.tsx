import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

interface GenreData {
    mv_code: number
    genre: string
}

interface DirectorData {
    mv_code: number
    d_name: string
}

interface ActorData {
    mv_code: number
    a_name: string
}

interface NationData {
    mv_code: number
    nation: string
}

const TableData = (props: { movie: Movie }) => {
    const navigate = useNavigate()
    const toMovie = (id: number) => {
        navigate(`/movie/${id}`, { state: props })
    }
    const [genre, setGenre] = useState<GenreData[]>([])
    const [actor, setActor] = useState<ActorData[]>([])
    const [director, setDirector] = useState<DirectorData[]>([])
    const [nation, setNation] = useState<NationData[]>([])

    const getMovieData = useCallback(async () => {
            try {
                // 데이터를 받아오는 동안 시간이 소요됨으로 await로 대기
                const genreRes = await axios.get('/api/genre', {
                    params: {
                        mv_code: props.movie.id,
                    },
                })
                const genreInputData = await genreRes.data.products.map((rowData: GenreData) => ({
                    id: rowData.mv_code,
                    genre: rowData.genre,
                }))
                setGenre(genreInputData.map((rowData: GenreData) => rowData.genre))
                const actorRes = await axios.get('/api/actor', {
                    params: {
                        mv_code: props.movie.id,
                    },
                })
                const actorInputData = await actorRes.data.products.map((rowData: ActorData) => ({
                    movie_id: rowData.mv_code,
                    a_name: rowData.a_name,
                }))
                setActor(actorInputData.map((rowData: ActorData) => rowData.a_name))
                const directorRes = await axios.get('/api/director', {
                    params: {
                        mv_code: props.movie.id,
                    },
                })
                const directorInputData = await directorRes.data.products.map((rowData: DirectorData) => ({
                    movie_id: rowData.mv_code,
                    d_name: rowData.d_name,
                }))
                setDirector(directorInputData.map((rowData: DirectorData) => rowData.d_name))
                const nationRes = await axios.get('/api/nation', {
                    params: {
                        mv_code: props.movie.id,
                    },
                })
                const nationInputData = await nationRes.data.products.map((rowData: NationData) => ({
                    movie_id: rowData.mv_code,
                    nation: rowData.nation
                }))
                setNation(nationInputData.map((rowData: NationData) => rowData.nation))
            } catch (e) {
                console.error(e)
            }
    }, [])

    useEffect(() => {
        getMovieData()
    }, [getMovieData])

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
                {genre.join(', ')}
            </td>
            <td style={{ textAlign: 'center' }}>{props.movie.playing_time ? props.movie.playing_time + '분' : ''}</td>
            <td style={{ textAlign: 'center' }}>
                {props.movie.opening_date && props.movie.opening_date.substring(0, 10) !== '0000-00-00'
                    ? new Date(
                          Date.UTC(
                              Number(props.movie.opening_date.substring(0, 4)),
                              Number(props.movie.opening_date.substring(5, 7)) - 1,
                              Number(props.movie.opening_date.substring(8, 10)) + 1,
                          ),
                      )
                          .toISOString()
                          .substring(0, 10) + ' 개봉'
                    : ''}
            </td>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {director.join(', ')}
            </td>
            <td
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {actor.join(', ')}
            </td>
            <td style={{ textAlign: 'center' }}>{props.movie.netizen_rate === null ? 0 : props.movie.netizen_rate}</td>
            <td style={{ textAlign: 'center' }}>
                {props.movie.journalist_score === null ? 0 : props.movie.journalist_score}
            </td>
            <td style={{ textAlign: 'center' }}>
                {nation.join(', ')}
            </td>
        </tr>
    )
}

export default TableData
