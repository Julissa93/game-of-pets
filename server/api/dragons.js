const router = require('express').Router();
const Dragon = require('../db/Dragon');

router.get('/', async (req, res, next) => {
    try {
        let dragons = await Dragon.findAll();
        res.json(dragons);
    } catch (err) {
        next(err);
    }
});

module.exports = router;