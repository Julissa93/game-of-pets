const router = require('express').Router()

router.use('/dragons', require('./dragons'))
router.use('/direwolves', require('./direwolves'))

module.exports = router