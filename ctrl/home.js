var app = require('../server')
var db = app.get('db')
module.exports = {

	GetNotifications : function(req, res) {
		db.header_get_notifications(function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				res.status(200).send(resp)	
			}
		})
	},

	GetArticleTitle : function(req, res) {
		console.log(req.params.id)
		db.article_get_title([req.params.id], function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				console.log(resp)
				res.status(200).send(resp)
			}
		})
	}
}


