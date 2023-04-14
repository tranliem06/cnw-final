const express = require('express');
const cors = require('cors');
const routers = require("./routes/index");
const config = require('./config/index');
const database = require('./models/dbconfig');
const getEnvironmentSetting = require('./_utils/getEnviromentSetting');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const initDatabase = () => {
    database.once('open', () => {
        console.log('Init MongoDB successfully.');
    })
}

const initServer = () => {
    app.use("/api/v1", routers);
    console.log("Init server successfully.");
}

const startServer = () => {
    app.listen(config.port, config.host, () => {
        console.log(`Server started at ${config.host}:${config.port}`);
    });
}

getEnvironmentSetting()
.then(() => initDatabase())
.then(() => initServer())
.then(() => startServer())
.catch((error) => {
    console.log('Failed setup environment:', error);
})

module.exports = app;
