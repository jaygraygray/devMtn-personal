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
		db.article_get_title_by_response([req.params.id], function(err, resp) {
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
	},

	GetHeadline : function(req, res) {
		db.article_get_container_info_headline(function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				res.status(200).send(resp)
			}
		})
	},

	UpdateLikes : function(req,res,next) {
		db.article_update_likes([req.body.num_likes, req.body.article_id], function(err, resp) {
			if (err) {
				console.log("Couldn't update article likes: ")
				return next(err)
			} else {
				db.user_update_likes([req.body.article_id, req.body.user_id], function(err, resp) {
					if (err) {
						console.log("Couldn't update user likes: ")
						return next(err)
					} else {
						db.notifications_create([req.body.user_id_notified,
							req.body.action,
							req.body.user_id,
							req.body.date,
							req.body.article_id,
							req.body.article_boolean,
							req.body.response_boolean,
							req.body.self_boolean], function(err, resp) {
								if (err) {
									console.log ("Couln't create notification: ")
									return next(err)
								} else {
									console.log("Notification logged!")
								}
							})
					}
				})
			}
		})
	}
}


