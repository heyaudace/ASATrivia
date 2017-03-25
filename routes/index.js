var express = require('express');
var router = express.Router();
var questions = require('./www/questions.js');

/* GET home page for players of the game. They should be prompted to input code or link. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ASA TRIVIA' });
});

/* GET moderator page. Moderator can start a new game. */
router.get('/create', function(req, res, next) {
  res.render('moderator', { title: 'ASA TRIVIA | Create New Game' });
});

router.get('/newgame', function(req, res, next) {
		var question = req.questions_per_round*req.rounds;
	// res.render('moderator', { title: 'ASA TRIVIA | Create New Game' });
});

module.exports = router;
