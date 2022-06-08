const express = require('express')
const router = express()
const db = require('../config/db')

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/test', (req, res) => {
    db.query('SELECT * FROM movie', (err, data) => {
        if (!err) res.send({ products: data })
        else res.send(err)
    })
})

router.get('/title', (req, res) => {
    db.query('SELECT * FROM movie ORDER BY title', (err, data) => {
        if (!err) res.send({ products: data })
        else res.send(err)
    })
})

module.exports = router
