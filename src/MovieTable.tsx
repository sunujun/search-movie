import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from 'react-js-pagination'
import styled from 'styled-components'
import './MovieTable.css'
import TableRow from './TableRow'

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

const TitleTableHeader = styled.th`
    width: 400px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`

const MovieRateTableHeader = styled.th`
    width: 120px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`

const ScopeTableHeader = styled.th`
    width: 240px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`
const PlayingTimeTableHeader = styled.th`
    width: 80px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`
const OpeningDateTableHeader = styled.th`
    width: 200px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`
const DirectorTableHeader = styled.th`
    width: 200px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`

const ScoreTableHeader = styled.th`
    width: 130px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`

const MovieTable = () => {
    // DB 사용 시
    const [movieDataList, setMovieDataList] = useState<Movie[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    const [itemsCountPerPage] = useState(20)
    const lastMovieIndex = pageNumber * itemsCountPerPage
    const firstMovieIndex = lastMovieIndex - itemsCountPerPage
    const currentMovie = movieDataList.slice(firstMovieIndex, lastMovieIndex)

    // await 를 사용하기 위해 async선언
    useEffect(() => {
        async function getMovieData() {
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
                // 선언된 inputData를 최초 선언한 inputData에 concat으로 추가
                setMovieDataList(inputData.concat(inputData))
            } catch (e) {
                console.error(e)
            }
        }
        getMovieData()
    }, [])

    const handlePageChange = (pageNumber: number) => {
        setPageNumber(pageNumber)
    }

    return (
        <div>
            <div>
                <table style={{ tableLayout: 'fixed', wordWrap: 'break-word', margin: '15px', width: '1500px' }}>
                    <thead>
                        <tr>
                            <TitleTableHeader>영화 제목</TitleTableHeader>
                            <MovieRateTableHeader>영화 등급</MovieRateTableHeader>
                            <ScopeTableHeader>개요</ScopeTableHeader>
                            <PlayingTimeTableHeader>상영 시간</PlayingTimeTableHeader>
                            <OpeningDateTableHeader>개봉 일자</OpeningDateTableHeader>
                            <DirectorTableHeader>감독</DirectorTableHeader>
                            {/* <th>출연</th> */}
                            <ScoreTableHeader>네티즌 평점</ScoreTableHeader>
                            <ScoreTableHeader>기자·평론가 평점</ScoreTableHeader>
                        </tr>
                    </thead>
                    <TableRow movieDataList={currentMovie} />
                </table>
                <Pagination
                    activePage={pageNumber}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={movieDataList.length}
                    pageRangeDisplayed={10}
                    prevPageText="‹"
                    nextPageText="›"
                    onChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default MovieTable
