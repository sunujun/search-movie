import React, { useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

const App = () => {
    // 서버에서 받은 데이터를 console로 찍어서 확인한다.
    useEffect(() => {
        axios
            .get('/api/test')
            .then(res => console.log(res))
            .catch()
    })

    return (
        <>
            <Header text="Search Movie" />
            <div>시작</div>
        </>
    )
}
export default App
