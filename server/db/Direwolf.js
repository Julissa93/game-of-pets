const sequelize = require('sequelize');
const db = require('./db');

const Direwolf = db.define('direwolves', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: sequelize.TEXT,
        defaultValue: 'imageUrl'
    }
})

module.exports = Direwolf;