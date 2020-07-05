const sqlite3 = require('sqlite3').verbose();
const DB_PATH = require('./constants.js')
let dataBase = undefined






async function createTable() {

    dataBase = await new sqlite3.Database(DB_PATH, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('connected')
        }

    })

    await dataBase.run(`CREATE TABLE LANGS (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name )`, (data, err) => {
        if (err) return console.error(err)
        else {
            console.log(data)
        }
    })

    await dataBase.all(`SELECT * from LANGS`, [], (err, rows) => {
        if (err) return console.error(err)
        else {
            rows.forEach((row) => {
                console.log(row.name)
            })
        }
    })

}



createTable()



// dataBase.close((err) => {
//     if (err) {
//         return console.error(err)
//     }
//     console.log('close the database connect')
// })


