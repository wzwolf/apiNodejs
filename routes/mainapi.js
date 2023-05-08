
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
router.get('/:id',getInfo,(req,res) => {
	res.send('get one entry: '+res.info.name);
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
router.patch('/:id',getInfo ,async (req,res) => {
	//res.send('update entry');
	//update name
	const updateInfo = {};
	if (req.body.name != null) {
		updateInfo.name = req.body.name;
	}
	//update info.info
	if (req.body.info != null) {
		updateInfo.info = req.body.info;
	}
	try {
		const updatedInfo = await info.updateOne({_id: res.info._id},{$set: updateInfo});
		res.json(updatedInfo)
	} catch(err) {
		res.status(400).json({message : err.message})
	}
});
// delete one entry
router.delete('/:id', getInfo, async (req,res) => {
	//res.send('delete entry');
	try{
		await res.info.deleteOne()
		res.json({ message:'Deleted Info'})
	} catch(err){
		res.status(500).json({ message:err.message})
	}
});

async function getInfo(req,res,next) {
	let selectedInfo;
	try {
		selectedInfo = await info.findById(req.params.id);
		if(selectedInfo == null){
			return res.status(404).json({message:'cannot find info'});
		}
	}catch(err){
		return res.status(500).json({message:err.message});
	}
	res.info = selectedInfo;
	next();
}


module.exports = router;
