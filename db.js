/**
 * Created by championswimmer on 15/05/17.
 */
const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Claim = sequelize.define('claim', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: Sequelize.STRING,
    issueUrl: Sequelize.STRING,
    pullUrl: {type: Sequelize.STRING, unique: true},
    repo: Sequelize.STRING,
    bounty: Sequelize.STRING,
    status: Sequelize.ENUM(Object.keys(config.CLAIM_STATUS).map((key) => config.CLAIM_STATUS[key]))
});

exports = module.exports = {
    Claim
};