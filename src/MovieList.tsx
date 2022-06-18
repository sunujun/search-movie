import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import MovieTable from './MovieTable'
import SearchInput from './SearchInput'

interface MovieData {
    mv_code: number
    title: string
    domestic_mv_rate: string
    netizen_score: number
    netizen_count?: number
    netizen_audience_score: number
    journalist_score: number
    journalist_count?: number
    playing_time: string
    opening_date: string
    image_src: string
    s_title: string
    s_text: string
}

interface Movie {
    id: number
    title: string
    movie_rate: string
    netizen_rate: number
    netizen_count?: number
    audience_rate: number
    audience_count?: number
    journalist_score: number
    journalist_count?: number
    playing_time: string
    opening_date: string
    image: string
    s_title: string
    s_text: string
}

const MovieList = () => {
    const [movieDataList, setMovieDataList] = useState<Movie[]>([])
    const selectList = ['영화 제목', '배우 이름', '감독 이름', '장르', '년도', '국가']
    const [selected, setSelected] = useState('영화 제목')
    const [searchData, setSearchData] = useState('')
    const [order, setOrder] = useState('title')
    const [selectedSearchType, setSelectedSearchType] = useState('영화 제목')

    const getShowingMovieData = useCallback(async () => {
        try {
            const res = await axios.get(`/api/movie_${order}`, {
                params: {
                    title: selectedSearchType === '영화 제목' ? searchData : '',
                    year: selectedSearchType === '년도' ? searchData : '',
                    director: selectedSearchType === '감독 이름' ? searchData : '',
                    actor: selectedSearchType === '배우 이름' ? searchData : '',
                    genre: selectedSearchType === '장르' ? searchData : '',
                    nation: selectedSearchType === '국가' ? searchData : '',
                },
            })
            const inputData = await res.data.products.map((rowData: MovieData) => ({
                id: rowData.mv_code,
                title: rowData.title,
                movie_rate: rowData.domestic_mv_rate,
                netizen_rate: rowData.netizen_score,
                audience_rate: rowData.netizen_audience_score,
                journalist_score: rowData.journalist_score,
                playing_time: rowData.playing_time,
                opening_date: rowData.opening_date,
                image: rowData.image_src,
                s_title: rowData.s_title,
                s_text: rowData.s_text,
            }))
            setMovieDataList(inputData)
        } catch (e) {
            console.error(e)
        }
    }, [order, searchData])

    useEffect(() => {
        getShowingMovieData()
    }, [getShowingMovieData])

    const handleRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrder(e.target.value)
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <select onChange={handleSelect} value={selected}>
                    {selectList.map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <SearchInput setSearchData={setSearchData} setSelectedSearchType={setSelectedSearchType} selected={selected}/>
            </div>
            <div>
                <label>
                    <input type="radio" value="title" checked={order === 'title'} onChange={handleRadioButton} />
                    제목순
                </label>
                <label>
                    <input
                        type="radio"
                        value="opening_date"
                        checked={order === 'opening_date'}
                        onChange={handleRadioButton}
                    />
                    개봉순
                </label>
                <label>
                    <input
                        type="radio"
                        value="playing_time"
                        checked={order === 'playing_time'}
                        onChange={handleRadioButton}
                    />
                    상영 시간순
                </label>
                <label>
                    <input
                        type="radio"
                        value="netizen_score"
                        checked={order === 'netizen_score'}
                        onChange={handleRadioButton}
                    />
                    네티즌 평점순
                </label>
                <label>
                    <input
                        type="radio"
                        value="journalist_score"
                        checked={order === 'journalist_score'}
                        onChange={handleRadioButton}
                    />
                    기자·평론가 평점순
                </label>
            </div>
            <MovieTable movieDataList={movieDataList} />
        </div>
    )
}

export default MovieList
