const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('안녕' + Math.random())
})

module.exports = router
