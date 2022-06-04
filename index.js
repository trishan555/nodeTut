const http = require('http')

const server = http.createServer((req, res) => {
    console.log('build the server')
    res.end('Home')
})

server.listen(5000)