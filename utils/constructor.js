
function Constructor(app, configs) {
    return configs.map((item, index, array) => {
        let route = undefined
        let { url, cb: callback } = item
        switch (item.method) {
            case 'GET':
                route = app.get(url, callback)
                break;
            case 'POST':
                route = app.post(url, callback)
                break;
            case 'DELETE':
                route = app.delete(url, callback)
                break;
            case 'PUT':
                route = app.delete(url, callback)
                break
        }
        return route
    })

}

module.exports = Constructor




// let config = {
//     method: '',
//     url: '',
//     cb: (req, res) => {

//     }
// }





