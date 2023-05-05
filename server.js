const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// getting env var
const mdb_url = process.env.MDB_URL;
const app = express();


// connect to mongodb
mongoose.connect(mdb_url);
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open',() => console.log('connected to db'));

app.use(express.json())

const mainApiRouter = require('./routes/mainapi');
app.use('/main',mainApiRouter);

// start server
app.listen(8080,() => console.log('Server has started'));

