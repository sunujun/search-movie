import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import styled from 'styled-components'
import TableRow from './TableRow'
import './MovieTable.css'

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

const ActorTableHeader = styled.th`
    width: 350px;
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

const NationTableHeader = styled.th`
    width: 140px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #444444;
`

const MovieTable = (props: { movieDataList: Movie[] }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [itemsCountPerPage] = useState(20)
    const lastMovieIndex = pageNumber * itemsCountPerPage
    const firstMovieIndex = lastMovieIndex - itemsCountPerPage
    const currentMovie = props.movieDataList.slice(firstMovieIndex, lastMovieIndex)

    const handlePageChange = (pageNumber: number) => {
        setPageNumber(pageNumber)
    }

    // 검색이나 정렬 등으로 props.movieDataList가 변하는 경우 pageNumber를 1로 초기화
    useEffect(() => {
        setPageNumber(1)
    }, [props.movieDataList])

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
                            <ActorTableHeader>출연</ActorTableHeader>
                            <ScoreTableHeader>네티즌 평점</ScoreTableHeader>
                            <ScoreTableHeader>기자·평론가 평점</ScoreTableHeader>
                            <NationTableHeader>국가</NationTableHeader>
                        </tr>
                    </thead>
                    <TableRow movieDataList={currentMovie} />
                </table>
                <Pagination
                    activePage={pageNumber}
                    itemsCountPerPage={itemsCountPerPage}
                    totalItemsCount={props.movieDataList.length}
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
