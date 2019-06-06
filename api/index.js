// export default (req, res) => {
//   res.send('미들웨어 테스트 ' + Math.random())
// }
const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('미들웨어 테스트 ' + Math.random())
})
app.use('/hello', require('./hello'))

module.exports = {
  path: '/api',
  handler: app
}
