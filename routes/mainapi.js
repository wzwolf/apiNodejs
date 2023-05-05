const express = require('express');
const router = express.Router();
const info = require('../models/mainModel');

// get all entry
router.get('/', async (req,res) => {
	//res.send('get all entry');
	try {
		const allInfo = await info.find();
		res.json(allInfo);
	} catch (err) {
		res.status(500).json({message: err.message});
	}
});
// get one entry
router.get('/:id',(req,res) => {
	res.send('get one entry');
});
// create one entry
router.post('/',async (req,res) => {
	//res.send('create entry');
	const newInfo = new info({
		name: req.body.name,
		info: req.body.info
	});
	try {
		const saveInfo = await newInfo.save();
		res.status(201).json(saveInfo);
	} catch(err) {
		res.status(400).json({message:err.message});
	}
});
// updating one entry
router.patch('/',(req,res) => {
	res.send('update entry');
});
// delete one entry
router.delete('/',(req,res) => {
	res.send('delete entry');
});

module.exports = router;
