const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'osj199',
    database: 'movie',
})

module.exports = db
