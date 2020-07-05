const { Router } = require('express');
const router = Router()

const getAll = require('./handlers/getAll')
const deleteArticle = require('./handlers/deleteArticle')
const getArticle = require('./handlers/getArticle')
const changeArticle = require('./handlers/changeArticle')
const addArticle = require('./handlers/addArticle')




router.get('/', (req, res) => {
    res.send(`<h1>Главная на articles</h1>`)
})

router.get('/all', getAll)
router.get('/article/:id', getArticle)
router.post('/send', addArticle)
router.delete('/delete/:id', deleteArticle)
router.put('/change/:id', changeArticle)


module.exports = router

