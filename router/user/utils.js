const configs = [
    {
        method: 'GET',
        url: '/users',
        cb: (req, res) => {
            res.send(`<h1>users</h1>`)
        }
    },
    {
        method: 'GET',
        url: '/users/:id',
        cb: (req, res) => {
            res.send(`<h1>users ${req.params.id}</h1>`)
        }
    },
    {
        method: 'GET',
        url: '/test',
        cb: (req, res) => {
            res.send(`<h1>users test</h1>`)
        }
    },
]


module.exports = configs