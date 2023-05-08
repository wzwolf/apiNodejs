const mongoose = require('mongoose')
const info = require('./models/mainModel');
require('dotenv').config();

// getting ENV var
const mdb_url = process.env.MDB_URL;

// connect to mongodb
mongoose.connect(mdb_url);
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open',() => console.log('connected to db'));

// create new info v1
async function saveNewInfoV1() {
	const newInfo = new info({ name:"just some new info", info:"more information here"})
	newInfo.save().then(() => console.log("user saved"))
	console.log(newInfo)
}

saveNewInfoV1()

// create new info v2
async function createNewInfoV2() {
	const newInfo = await info.create({ name:"just some new info", info: "more information here"})
	newInfo.name = "I change to another name"
	await newInfo.save()
	console.log(newInfo)
}

