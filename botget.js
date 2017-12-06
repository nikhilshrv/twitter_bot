console.log("The bot is starting");

var Twit = require("twit");

var config = require("./config");

var T = new Twit(config);

var query = {
	q: 'oneplus', 
	count: 5
};

T.get('search/tweets', query, checked);

function checked (err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
		console.log();	
	}
};