const router = require('express').Router();
const Direwolf = require('../db/Direwolf');

router.get('/', async (req, res, next) => {
    try {
        const wolves = await Direwolf.findAll();
        res.json(wolves);
    } catch (err) {
        next(err);
    }
});

module.exports = router;