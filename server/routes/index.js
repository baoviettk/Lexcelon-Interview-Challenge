const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load data, parse to json
const data = fs.readFileSync('./data/states.json');
const states = JSON.parse(data);

//route to return the JSON of a list of states
router.get('/states',function(req, res) {
    res.json(
      states);
});
module.exports = router;
