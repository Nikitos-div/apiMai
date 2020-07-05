const sqlite3 = require('sqlite3').verbose();
const DB_PATH = require('./constants.js')
let dataBase = undefined


dataBase = await new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('connected')
    }

})

dataBase.run(`CREATE TABLE LANGS (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name )`, (data, err) => {
    if (err) return console.error(err)
    else {
        console.log(data)
    }
})


dataBase.all(`SELECT * from LANGS`, [], (err, rows) => {
    if (err) return console.error(err)
    else {
        rows.forEach((row) => {
            console.log(row.name)
        })
    }
})


dataBase.close((err) => {
    if (err) {
        return console.error(err)
    }
    console.log('close the database connect')
})


