const knexConfig = require('../knexfile');
const knex = require('knex');
module.exports = knex(knexConfig.cloud); //knexConfig options viewable in the knexfile