const getArticle = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    else {
        const id = req.params.id
        res.sendStatus(200)
    }
}


module.exports = getArticle