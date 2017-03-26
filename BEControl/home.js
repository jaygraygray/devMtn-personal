var app = require('../server')
var db = app.get('db')
module.exports = {

	GetNotifications : function(req, res) {
		db.header_get_notifications(function(err, resp) {
			if (err) {console.log(err)
			} else {
			res.status(200).send(resp)	}})
	},
	GetArticleTitle : function(req, res) {
		db.article_get_title([req.params.id], function(err, resp) {
			if (err) {console.log(err)
			} else {
			res.status(200).send(resp)}})
	},
	GetArticleTitleByResponse : function(req, res) {
		db.article_get_title_by_response([req.params.id], function(err, resp) {
			if (err) {console.log(err)
			} else {
			res.status(200).send(resp)}})
	},
	GetUserTags : function(req, res) {
		db.user_get_tags([req.params.id], function(err, resp) {
			if (err) {console.log(err) 
			} else {
			res.status(200).send(resp)}})
	},
	GetHeadlines : function(req, res) {
		console.log(req.query.tags)
		if (req.params.cmd.slice(0,4) == 'tags') {
			tag = req.params.cmd.slice(5)
			req.params.cmd = 'tags'
		}
		
		switch(req.params.cmd) {
			case 'headline' :
			db.article_get_container_info_headline(function(err, resp) {
				if (err) { console.log(err)
				} else {
				res.status(200).send(resp)}})
			break;
			case 'all' :
			db.article_get_container_info_all(function(err, resp) {
				if (err) { console.log(err)
				} else {
				res.status(200).send(resp)}})
			break;
		}
	},

	ArticleNotification : function(req,res,next) {
		db.notifications_create([req.body.user_id_notified,
			req.body.action,
			req.body.user_id,
			req.body.date,
			req.body.article_id_just_int,
			req.body.article_boolean,
			req.body.response_boolean,
			req.body.self_boolean], function(err, resp) {
		if (err) { console.log ("Couln't create notification: ", err)  }})
		switch(req.body.action) {
		case 'L' :
			db.article_update_likes([req.body.article_id_just_int], function(err, resp) {
			if (err) { console.log("Couldn't update target likes: ", err) } })
			db.user_update_likes([req.body.article_id_array, req.body.user_id], function(err, resp) {
			if (err) { console.log("Couldn't update user likes: ", err) } })
		break;
		case 'B':
			db.article_update_bookmarks([req.article_just_int], function(err, resp) {
			if (err) { console.log("Couldn't update target bookmarks:", err) } })
			db.user_update_bookmarks([req.body.article_id_array, req.body.user_id], function(err, resp) {
			if (err) { console.log("Couldn't update user likes: ", err) } })
		break;
		}
	},
	GetArticleLikes : function(req, res) {
		db.user_get_article_likes([req.params.id], function(err, resp) {
			if (err) { console.log("Error getting articles liked by user: ", err)
			} else {	
			res.status(200).send(resp) }})
	},
	RemoveArticleLike : function(req, res) {
		db.user_remove_like([req.body.unliked_id, req.body.user_id], function(err, resp) {
			if (err) {console.log("Error removing like: ", err) }}) 
	},
	GetBookmarks : function(req ,res) {
		db.user_get_bookmarks([req.params.id], function(err, resp) {
			if (err) { console.log('Error getting bookmarks for user: ', err)
			} else {
			res.status(200).send(resp) }})
	},
	RemoveBookmark : function(req, res) {
		db.user_remove_bookmark([req.body.unliked_id, req.body.user_id], function(err, resp) {
			if (err) {console.log("Error removing bookmark: ", err)}})
	}
}


