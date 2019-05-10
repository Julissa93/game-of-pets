const Sequelize = require('sequelize');
const db = require('../db/db');

const Dragon = db.define('dragons', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: 'imageUrl'
    }
})

module.exports = Dragon;