const express = require('express')
const router = express()
const db = require('../config/db')

// http://localhost:4000/ 으로 접속 시 응답메시지 출력

router.get('/movie_title', (req, res) => {
    let sql = ''
    let searchData = null
    if (req.query.title !== '') {
        sql = 'SELECT * FROM movie WHERE title like ? ORDER BY movie.title'
        searchData = [req.query.title + '%']
    } else if (req.query.year !== '') {
        sql =
            "SELECT * FROM movie where DATE_FORMAT(opening_date,'%Y') = DATE_FORMAT(now()," +
            '?' +
            ') ORDER BY movie.title'
        searchData = [req.query.year]
    } else if (req.query.director !== '') {
        sql =
            'select * from director, direct, movie  where  director.d_code = direct.d_code and movie.mv_code = direct.mv_code and director.d_name =' +
            '?' +
            'ORDER BY movie.title'
        searchData = [req.query.director]
    } else if (req.query.actor !== '') {
        sql =
            'select * from actor, casting, movie  where  actor.a_code = casting.a_code and movie.mv_code = casting.mv_code and actor.a_name =' +
            '?' +
            'ORDER BY movie.title'
        searchData = [req.query.actor]
    } else if (req.query.genre !== '') {
        sql =
            'select * from genre, movie where genre.mv_code = movie.mv_code and genre.genre = ' +
            '?' +
            'ORDER BY movie.title'
        searchData = [req.query.genre]
    } else if (req.query.nation !== '') {
        sql =
            'select * from nation, movie where nation.mv_code = movie.mv_code and nation.nation = ' +
            '?' +
            'ORDER BY movie.title'
        searchData = [req.query.nation]
    } else {
        sql = 'SELECT * FROM movie ORDER BY movie.title'
    }
    db.query(sql, searchData, (err, data) => {
        if (!err) {
            res.send({ products: data })
        } else {
            res.send(err)
        }
    })
})

router.get('/movie_opening_date', (req, res) => {
    let sql = ''
    let searchData = null
    if (req.query.title !== '') {
        sql = 'SELECT * FROM movie WHERE title like ? ORDER BY movie.opening_date desc'
        searchData = [req.query.title + '%']
    } else if (req.query.year !== '') {
        sql =
            "SELECT * FROM movie where DATE_FORMAT(opening_date,'%Y') = DATE_FORMAT(now()," +
            '?' +
            ') ORDER BY movie.opening_date desc'
        searchData = [req.query.year]
    } else if (req.query.director !== '') {
        sql =
            'select * from director, direct, movie  where  director.d_code = direct.d_code and movie.mv_code = direct.mv_code and director.d_name =' +
            '?' +
            'ORDER BY movie.opening_date desc'
        searchData = [req.query.director]
    } else if (req.query.actor !== '') {
        sql =
            'select * from actor, casting, movie  where  actor.a_code = casting.a_code and movie.mv_code = casting.mv_code and actor.a_name =' +
            '?' +
            'ORDER BY movie.opening_date desc'
        searchData = [req.query.actor]
    } else if (req.query.genre !== '') {
        sql =
            'select * from genre, movie where genre.mv_code = movie.mv_code and genre.genre = ' +
            '?' +
            'ORDER BY movie.opening_date desc'
        searchData = [req.query.genre]
    } else if (req.query.nation !== '') {
        sql =
            'select * from nation, movie where nation.mv_code = movie.mv_code and nation.nation = ' +
            '?' +
            'ORDER BY movie.opening_date desc'
        searchData = [req.query.nation]
    } else {
        sql = 'SELECT * FROM movie ORDER BY movie.opening_date desc'
    }
    db.query(sql, searchData, (err, data) => {
        if (!err) {
            res.send({ products: data })
        } else {
            res.send(err)
        }
    })
})

router.get('/movie_playing_time', (req, res) => {
    let sql = ''
    let searchData = null
    if (req.query.title !== '') {
        sql = 'SELECT * FROM movie WHERE title like ? ORDER BY movie.playing_time desc'
        searchData = [req.query.title + '%']
    } else if (req.query.year !== '') {
        sql =
            "SELECT * FROM movie where DATE_FORMAT(opening_date,'%Y') = DATE_FORMAT(now()," +
            '?' +
            ') ORDER BY movie.playing_time desc'
        searchData = [req.query.year]
    } else if (req.query.director !== '') {
        sql =
            'select * from director, direct, movie  where  director.d_code = direct.d_code and movie.mv_code = direct.mv_code and director.d_name =' +
            '?' +
            'ORDER BY movie.playing_time desc'
        searchData = [req.query.director]
    } else if (req.query.actor !== '') {
        sql =
            'select * from actor, casting, movie  where  actor.a_code = casting.a_code and movie.mv_code = casting.mv_code and actor.a_name =' +
            '?' +
            'ORDER BY movie.playing_time desc'
        searchData = [req.query.actor]
    } else if (req.query.genre !== '') {
        sql =
            'select * from genre, movie where genre.mv_code = movie.mv_code and genre.genre = ' +
            '?' +
            'ORDER BY movie.playing_time desc'
        searchData = [req.query.genre]
    } else if (req.query.nation !== '') {
        sql =
            'select * from nation, movie where nation.mv_code = movie.mv_code and nation.nation = ' +
            '?' +
            'ORDER BY movie.playing_time desc'
        searchData = [req.query.nation]
    } else {
        sql = 'SELECT * FROM movie ORDER BY movie.playing_time desc'
    }
    db.query(sql, searchData, (err, data) => {
        if (!err) {
            res.send({ products: data })
        } else {
            res.send(err)
        }
    })
})

router.get('/movie_netizen_score', (req, res) => {
    let sql = ''
    let searchData = null
    if (req.query.title !== '') {
        sql = 'SELECT * FROM movie WHERE title like ? ORDER BY movie.netizen_score desc'
        searchData = [req.query.title + '%']
    } else if (req.query.year !== '') {
        sql =
            "SELECT * FROM movie where DATE_FORMAT(opening_date,'%Y') = DATE_FORMAT(now()," +
            '?' +
            ') ORDER BY movie.netizen_score desc'
        searchData = [req.query.year]
    } else if (req.query.director !== '') {
        sql =
            'select * from director, direct, movie  where  director.d_code = direct.d_code and movie.mv_code = direct.mv_code and director.d_name =' +
            '?' +
            'ORDER BY movie.netizen_score desc'
        searchData = [req.query.director]
    } else if (req.query.actor !== '') {
        sql =
            'select * from actor, casting, movie  where  actor.a_code = casting.a_code and movie.mv_code = casting.mv_code and actor.a_name =' +
            '?' +
            'ORDER BY movie.netizen_score desc'
        searchData = [req.query.actor]
    } else if (req.query.genre !== '') {
        sql =
            'select * from genre, movie where genre.mv_code = movie.mv_code and genre.genre = ' +
            '?' +
            'ORDER BY movie.netizen_score desc'
        searchData = [req.query.genre]
    } else if (req.query.nation !== '') {
        sql =
            'select * from nation, movie where nation.mv_code = movie.mv_code and nation.nation = ' +
            '?' +
            'ORDER BY movie.netizen_score desc'
        searchData = [req.query.nation]
    } else {
        sql = 'SELECT * FROM movie ORDER BY movie.netizen_score desc'
    }
    db.query(sql, searchData, (err, data) => {
        if (!err) {
            res.send({ products: data })
        } else {
            res.send(err)
        }
    })
})

router.get('/movie_journalist_score', (req, res) => {
    let sql = ''
    let searchData = null
    if (req.query.title !== '') {
        sql = 'SELECT * FROM movie WHERE title like ? ORDER BY movie.journalist_score desc'
        searchData = [req.query.title + '%']
    } else if (req.query.year !== '') {
        sql =
            "SELECT * FROM movie where DATE_FORMAT(opening_date,'%Y') = DATE_FORMAT(now()," +
            '?' +
            ') ORDER BY movie.journalist_score desc'
        searchData = [req.query.year]
    } else if (req.query.director !== '') {
        sql =
            'select * from director, direct, movie  where  director.d_code = direct.d_code and movie.mv_code = direct.mv_code and director.d_name =' +
            '?' +
            'ORDER BY movie.journalist_score desc'
        searchData = [req.query.director]
    } else if (req.query.actor !== '') {
        sql =
            'select * from actor, casting, movie  where  actor.a_code = casting.a_code and movie.mv_code = casting.mv_code and actor.a_name =' +
            '?' +
            'ORDER BY movie.journalist_score desc'
        searchData = [req.query.actor]
    } else if (req.query.genre !== '') {
        sql =
            'select * from genre, movie where genre.mv_code = movie.mv_code and genre.genre = ' +
            '?' +
            'ORDER BY movie.journalist_score desc'
        searchData = [req.query.genre]
    } else if (req.query.nation !== '') {
        sql =
            'select * from nation, movie where nation.mv_code = movie.mv_code and nation.nation = ' +
            '?' +
            'ORDER BY movie.journalist_score desc'
        searchData = [req.query.nation]
    } else {
        sql = 'SELECT * FROM movie ORDER BY movie.journalist_score desc'
    }
    db.query(sql, searchData, (err, data) => {
        if (!err) {
            res.send({ products: data })
        } else {
            res.send(err)
        }
    })
})

router.get('/actor', (req, res) => {
    const mv_code = req.query.mv_code
    db.query(
        'select * from actor, casting  where  actor.a_code = casting.a_code and mv_code = ?',
        mv_code,
        (err, data) => {
            if (!err) res.send({ products: data })
            else res.send(err)
        },
    )
})

router.get('/director', (req, res) => {
    const mv_code = req.query.mv_code
    db.query(
        'select * from director, direct  where  director.d_code = direct.d_code and mv_code = ?',
        mv_code,
        (err, data) => {
            if (!err) res.send({ products: data })
            else res.send(err)
        },
    )
})

router.get('/genre', (req, res) => {
    const mv_code = req.query.mv_code
    db.query(
        'select * from genre, movie where genre.mv_code = movie.mv_code and movie.mv_code = ?',
        mv_code,
        (err, data) => {
            if (!err) res.send({ products: data })
            else res.send(err)
        },
    )
})

router.get('/nation', (req, res) => {
    const mv_code = req.query.mv_code
    db.query(
        'select * from nation, movie where nation.mv_code = movie.mv_code and movie.mv_code = ?',
        mv_code,
        (err, data) => {
            if (!err) res.send({ products: data })
            else res.send(err)
        },
    )
})

module.exports = router
