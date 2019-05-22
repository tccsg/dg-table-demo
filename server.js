// eslint-disable-next-line node/no-deprecated-api
// const { parse } = require('url')
const connect = require('connect')
const serveStatic = require('serve-static')

let port = 4000
var server = connect()
server.use(serveStatic('./dist'))

// server.use(function (req, res, next) {
//   // const parseUrl = parse(req.url, true)
//   // const urlpath = parseUrl.path
// })

server.listen(port)
