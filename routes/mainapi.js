const express = require('express');
const router = express.Router();


// get all entry
router.get('/',(req,res) => {
	res.send('get all entry');
});
// get one entry
router.get('/:id',(req,res) => {
	res.send('get one entry');
});
// create one entry
router.post('/',(req,res) => {
	res.send('create entry');
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
