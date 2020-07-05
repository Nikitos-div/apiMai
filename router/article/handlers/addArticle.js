const addArticle = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    else {
        console.log(req.body)
        res.sendStatus(200)
    }
}



module.exports = addArticle