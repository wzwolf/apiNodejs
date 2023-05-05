const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mdb_url = process.env.MDB_URL;
const app = express();


// connect to mongodb
mongoose.connect(mdb_url);
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open',() => console.log('connected to db'));

app.use(express.json())

const mainApiRoute = require('./routes/mainapi');
app.use('/main',mainApiRoute);

// start server
app.listen(8080,() => console.log('Server has started'));

