const router = require('express').Router()

router.use('/dragons', require('./dragons'))
router.use('/wolves', require('./wolves'))

module.exports = router