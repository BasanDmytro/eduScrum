const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routers/');
const logger = require("morgan");
const cors = require('cors');
const helmet = require('helmet');
const Database = require("./db");
const path = require('path');
const mongoose = require('mongoose');

const API_PORT = 3000;
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger("dev"));

/* set up middlewares */

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

require('./routers')(app);


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// launch our server into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
