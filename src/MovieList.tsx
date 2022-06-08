import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import MovieTable from './MovieTable'
import SearchInput from './SearchInput'

interface Movie {
    director: string
    enter_date: string
    id: number
    image: string
    journalist_count: number
    journalist_score: number
    movie_rate: string
    netizen_count: number
    netizen_rate: number
    opening_date: string
    playing_time: string
    scope: string
    title: string
}

const MovieList = () => {
    const [movieDataList, setMovieDataList] = useState<Movie[]>([])
    const [searchTitle, setSearchTitle] = useState('')
    const getMovieData = useCallback(async () => {
        if (searchTitle !== '') {
            try {
                const res = await axios.get('/api/search', {
                    params: {
                        title: searchTitle,
                    },
                })
                const inputData = await res.data.map((rowData: Movie) => ({
                    director: rowData.director,
                    enter_date: rowData.enter_date,
                    id: rowData.id,
                    image: rowData.image,
                    journalist_count: rowData.journalist_count,
                    journalist_score: rowData.journalist_score,
                    movie_rate: rowData.movie_rate,
                    netizen_count: rowData.netizen_count,
                    netizen_rate: rowData.netizen_rate,
                    opening_date: rowData.opening_date,
                    playing_time: rowData.playing_time,
                    scope: rowData.scope,
                    title: rowData.title,
                }))
                setMovieDataList(inputData)
            } catch (e) {
                console.error(e)
            }
        } else {
            try {
                // 데이터를 받아오는 동안 시간이 소요됨으로 await로 대기
                const res = await axios.get('/api/test')
                // 받아온 데이터로 다음 작업을 진행하기 위해 await로 대기
                // 받아온 데이터를 map 해주어 rowData 별로 inputData 선언
                const inputData = await res.data.products.map((rowData: Movie) => ({
                    director: rowData.director,
                    enter_date: rowData.enter_date,
                    id: rowData.id,
                    image: rowData.image,
                    journalist_count: rowData.journalist_count,
                    journalist_score: rowData.journalist_score,
                    movie_rate: rowData.movie_rate,
                    netizen_count: rowData.netizen_count,
                    netizen_rate: rowData.netizen_rate,
                    opening_date: rowData.opening_date,
                    playing_time: rowData.playing_time,
                    scope: rowData.scope,
                    title: rowData.title,
                }))
                setMovieDataList(inputData)
            } catch (e) {
                console.error(e)
            }
        }
    }, [searchTitle])

    useEffect(() => {
        console.log(movieDataList.length)
        getMovieData()
    }, [getMovieData])

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <SearchInput setSearchTitle={setSearchTitle} />
            </div>
            <MovieTable movieDataList={movieDataList} />
        </div>
    )
}

export default MovieList
