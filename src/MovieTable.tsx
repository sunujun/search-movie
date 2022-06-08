import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableRow from './TableRow'

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

const MovieTable = () => {
        // DB 사용 시
        const [movieDataList, setMovieDataList] = useState<Movie[]>([])
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
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>영화 제목</th>
                            <th>영화 등급</th>
                            <th>개요</th>
                            <th>상영 시간</th>
                            <th>개봉 일자</th>
                            <th>감독</th>
                            {/* <th>출연</th> */}
                            <th>네티즌 평점</th>
                            <th>기자·평론가 평점</th>
                        </tr>
                    </thead>
                    <TableRow movieDataList={movieDataList}/>
                </table>
            </div>
        </div>
    )
}

export default MovieTable
