"use strict";
const config = require("./knexfile");
const knexx = require('knex')(config.development);
module.exports = knexx;
