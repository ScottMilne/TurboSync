var express = require('express');
var router = express.Router();

const fs = require('fs');
let rawdata = fs.readFileSync('outbox/audio.json');
let originalAudio = JSON.parse(rawdata);




	




/* GET home page. */
router.get('/', function(req, res, next) {		

res.render('index', { title: 'Express',originalAudio:originalAudio});

  //console.log(originalAudio);
});



module.exports = router;	



