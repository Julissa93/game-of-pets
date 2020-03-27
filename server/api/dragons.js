const router = require('express').Router();
const Dragon = require('../db/Dragon');

router.get('/', async (req, res, next) => {
    try {
        const dragons = await Dragon.findAll();
        res.json(dragons);
    } catch (err) {
        next(err);
    }
});

module.exports = router;