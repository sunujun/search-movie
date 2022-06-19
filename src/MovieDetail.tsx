import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
    state: Movie
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
    r_code: number
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

const MovieDetail = () => {
    const location = useLocation() as LocationState
    const [genre, setGenre] = useState<GenreData[]>([])
    const [actor, setActor] = useState<ActorData[]>([])
    const [director, setDirector] = useState<DirectorData[]>([])
    const [nation, setNation] = useState<NationData[]>([])
    const [photo, setPhoto] = useState<PhotoData[]>([])
    const [oneLine, setOneLine] = useState<OneLineData[]>([])
    const [script, setScript] = useState<ScriptData[]>([])
    const [review, setReview] = useState<ReviewData[]>([])

    const getMovieData = useCallback(async () => {
        try {
            // 데이터를 받아오는 동안 시간이 소요됨으로 await로 대기
            const genreRes = await axios.get('/api/genre', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const genreInputData = await genreRes.data.products.map((rowData: GenreData) => ({
                id: rowData.mv_code,
                genre: rowData.genre,
            }))
            setGenre(genreInputData.map((rowData: GenreData) => rowData.genre))
            const actorRes = await axios.get('/api/actor', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const actorInputData = await actorRes.data.products.map((rowData: ActorData) => ({
                mv_code: rowData.mv_code,
                a_name: rowData.a_name,
                a_part: rowData.a_part,
                a_role: rowData.a_role,
                a_src: rowData.a_src,
            }))
            setActor(actorInputData)
            const directorRes = await axios.get('/api/director', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const directorInputData = await directorRes.data.products.map((rowData: DirectorData) => ({
                mv_code: rowData.mv_code,
                d_name: rowData.d_name,
                d_src: rowData.d_src,
            }))
            setDirector(directorInputData)
            const nationRes = await axios.get('/api/nation', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const nationInputData = await nationRes.data.products.map((rowData: NationData) => ({
                mv_code: rowData.mv_code,
                nation: rowData.nation,
            }))
            setNation(nationInputData.map((rowData: NationData) => rowData.nation))
            const photoRes = await axios.get('/api/photo', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const photoInputData = await photoRes.data.products.map((rowData: PhotoData) => ({
                mv_code: rowData.mv_code,
                photo_src: rowData.photo_src,
            }))
            setPhoto(photoInputData)
            const oneLineRes = await axios.get('/api/one_line', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const oneLineInputData = await oneLineRes.data.products.map((rowData: OneLineData) => ({
                mv_code: rowData.mv_code,
                n_score: rowData.n_score,
                audience_check: rowData.audience_check,
                n_name: rowData.n_name,
                n_text: rowData.n_text,
            }))
            setOneLine(oneLineInputData)
            const scriptRes = await axios.get('/api/script', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const scriptInputData = await scriptRes.data.products.map((rowData: ScriptData) => ({
                mv_code: rowData.mv_code,
                a_role: rowData.a_role,
                a_name: rowData.a_name,
                s_script: rowData.s_script,
            }))
            setScript(scriptInputData)
            const reviewRes = await axios.get('/api/review', {
                params: {
                    mv_code: location.state.id,
                },
            })
            const reviewInputData = await reviewRes.data.products.map((rowData: ReviewData) => ({
                mv_code: rowData.mv_code,
                r_name: rowData.r_name,
                r_posted_date: rowData.r_posted_date,
                r_text: rowData.r_text,
                r_title: rowData.r_title,
                r_code: rowData.r_code,
            }))
            setReview(reviewInputData)
        } catch (e) {
            console.error(e)
        }
    }, [])

    useEffect(() => {
        getMovieData()
    }, [getMovieData])

    const navigate = useNavigate()
    const toReview = (id: number) => {
        navigate(`/movie/${location.state.id}/review/${id}`, { state: review.find(item => item.r_code === id) })
    }

    return (
        <div style={{ marginLeft: '50px' }}>
            <h2 style={{ margin: '20px', fontWeight: 'bold' }}>{location.state.title}</h2>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <div>
                    <img src={location.state.image} style={{ margin: '12px' }} />
                </div>
                <div style={{ padding: '12px' }}>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        {location.state.audience_rate !== null && (
                            <>
                                <DetailMainText>관람객</DetailMainText>
                                <DetailText>{location.state.audience_rate}</DetailText>
                            </>
                        )}
                        {location.state.journalist_score !== null && (
                            <>
                                <DetailMainText>기자·평론가</DetailMainText>
                                <DetailText>{location.state.journalist_score}</DetailText>
                            </>
                        )}
                        {location.state.netizen_rate !== null && (
                            <>
                                <DetailMainText>네티즌</DetailMainText>
                                <DetailText>{location.state.netizen_rate}</DetailText>
                            </>
                        )}
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        {genre.length !== 0 && (
                            <>
                                <DetailMainText>장르</DetailMainText>
                                <DetailText>{genre.join(', ')}</DetailText>
                            </>
                        )}
                        {nation.length !== 0 && (
                            <>
                                <DetailMainText>국가</DetailMainText>
                                <DetailText>{nation.join(', ')}</DetailText>
                            </>
                        )}
                        {location.state.playing_time && (
                            <>
                                <DetailMainText>상영 시간</DetailMainText>
                                <DetailText>{location.state.playing_time}분</DetailText>
                            </>
                        )}
                        {location.state.opening_date && location.state.opening_date !== '0000-00-00' && (
                            <>
                                <DetailMainText>개봉 일자</DetailMainText>
                                <DetailText>
                                    {new Date(
                                        Date.UTC(
                                            Number(location.state.opening_date.substring(0, 4)),
                                            Number(location.state.opening_date.substring(5, 7)) - 1,
                                            Number(location.state.opening_date.substring(8, 10)) + 1,
                                        ),
                                    )
                                        .toISOString()
                                        .substring(0, 10) + ' 개봉'}
                                </DetailText>
                            </>
                        )}
                        {location.state.movie_rate && (
                            <>
                                <DetailMainText>영화 등급</DetailMainText>
                                <DetailText>{location.state.movie_rate}</DetailText>
                            </>
                        )}
                    </div>
                    <div style={{ flexDirection: 'row', display: 'column' }}>
                        {director.length !== 0 && (
                            <>
                                <DetailMainText>감독</DetailMainText>
                                <DetailText>
                                    {director.map((rowData: DirectorData) => rowData.d_name).join(', ')}
                                </DetailText>
                            </>
                        )}
                        {actor.length !== 0 && (
                            <>
                                <DetailMainText>출연</DetailMainText>
                                <DetailText>{actor.map((rowData: ActorData) => rowData.a_name).join(', ')}</DetailText>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div>
                {(location.state.s_title !== '' || location.state.s_text !== '') && (
                    <div style={{ marginTop: '50px' }}>
                        <DetailMainText>줄거리</DetailMainText>
                        {location.state.s_title && (
                            <DetailText style={{ lineHeight: '130%' }}>{location.state.s_title}</DetailText>
                        )}
                        {location.state.s_text && (
                            <DetailText style={{ lineHeight: '130%' }}>{location.state.s_text}</DetailText>
                        )}
                    </div>
                )}
            </div>
            <div>
                {(director.length !== 0 || actor.length !== 0) && (
                    <div style={{ marginTop: '50px' }}>
                        <DetailMainText>배우·제작진</DetailMainText>
                        <div
                            style={{
                                width: '480px',
                                display: 'grid',
                                gridTemplateRows: '1fr ',
                                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                            }}>
                            {director.length !== 0 &&
                                director.map(item => {
                                    return (
                                        <div key={item.d_src} style={{ width: '120px', overflow: 'hidden' }}>
                                            <img style={{ width: '120px', height: '150px' }} src={item.d_src}></img>
                                            <h5 style={{ lineHeight: '130%', fontSize: '14px' }}>{item.d_name}</h5>
                                            <h5 style={{ lineHeight: '130%', fontSize: '14px' }}>감독</h5>
                                        </div>
                                    )
                                })}
                            {actor.length !== 0 &&
                                actor.map(item => {
                                    return (
                                        <div key={item.a_src} style={{ width: '120px', overflow: 'hidden' }}>
                                            <img style={{ width: '120px', height: '150px' }} src={item.a_src} />
                                            <h5 style={{ lineHeight: '130%', fontSize: '14px' }}>{item.a_name}</h5>
                                            <h5 style={{ lineHeight: '130%', fontSize: '14px' }}>{item.a_part}</h5>
                                            <h5 style={{ lineHeight: '130%', fontSize: '14px' }}>{item.a_role}</h5>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                )}
            </div>
            <div style={{ marginTop: '50px' }}>
                <DetailMainText>포토</DetailMainText>
                <div
                    style={{
                        width: '480px',
                        display: 'grid',
                        gridTemplateRows: '1fr ',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                    }}>
                    {photo.length !== 0 &&
                        photo.map(item => {
                            return (
                                <div key={item.photo_src} style={{ margin: '5px' }}>
                                    <img src={item.photo_src} style={{ width: '221px', height: '147px' }} />
                                </div>
                            )
                        })}
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <DetailMainText>한줄평</DetailMainText>
                <div>
                    {oneLine.length !== 0 &&
                        oneLine.map(item => {
                            return (
                                <div key={item.n_text} style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <DetailText>{item.n_score}점</DetailText>
                                        <DetailText>{item.n_name}</DetailText>
                                    </div>
                                    <DetailText>{item.n_text}</DetailText>
                                </div>
                            )
                        })}
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <DetailMainText>명대사</DetailMainText>
                <div>
                    {script.length !== 0 &&
                        // 아이디와 명대사 댓글 제외한 것들 중 중복 항목 제거
                        script
                            .filter((item1, index, arr) => {
                                return (
                                    arr.findIndex(
                                        item2 => item1.a_name === item2.a_name && item1.s_script === item2.s_script,
                                    ) === index
                                )
                            })
                            .map(item => {
                                return (
                                    <div key={item.s_script} style={{ marginBottom: '20px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <DetailText>{item.a_name}</DetailText>
                                            <DetailText>({item.a_role} 역)</DetailText>
                                        </div>
                                        <DetailText>{item.s_script}</DetailText>
                                    </div>
                                )
                            })}
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <DetailMainText>리뷰</DetailMainText>
                {review.length !== 0 &&
                    review.map((item, index) => {
                        return (
                            <div key={item.r_code} style={{ marginBottom: '20px' }}>
                                <a onClick={() => toReview(item.r_code)}>
                                    {index + 1}. {item.r_title}
                                </a>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default MovieDetail
