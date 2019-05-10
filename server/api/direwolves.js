const router = require('express').Router();
const Direwolf = require('../db/Direwolf');

router.get('/', async (req, res, next) => {
    try {
        let direwolves = await Direwolf.findAll();
        res.json(direwolves);
    } catch (err) {
        next(err);
    }
});

module.exports = router;