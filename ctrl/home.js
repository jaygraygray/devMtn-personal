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
		db.article_get_title([req.params.id], function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				res.status(200).send(resp)
			}
		})
	},

	GetArticleTitleByResponse : function(req, res) {
		db.get_article_title_by_response([req.params.id], function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				res.status(200).send(resp)
			}
		})
	},

	GetUserTags : function(req, res) {
		db.user_get_tags([req.params.id], function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				res.status(200).send(resp)
			}
		})
	}

}


