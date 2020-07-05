const express = require('express');
const app = express();
// require('./router/sendData')(app)
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const articlesRoutes = require('./router/article/router.js')
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//Хэдеры
app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


//middleware


app.use('/article', articlesRoutes)





app.post('/post', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    else {
        console.log(req.body)
        res.sendStatus(200)
    }
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


//  middleware - Лов