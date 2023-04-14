const mongoose = require('mongoose');
const config = require('../config/index');
const uri = `${config.db_dialect}://${config.db_host}:${config.db_port}/${config.db_database}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'Connection error:'));

module.exports = database;