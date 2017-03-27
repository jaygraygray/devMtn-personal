var app = require('../server')
var db = app.get('db')
module.exports = {

	CreateArticle : function(req, res) {
		db.article_create([req.body.author_id,
						  req.body.title,
						  req.body.body,
						  req.body.date_started,
						  req.body.date_published,
						  req.body.headline_img,
						  req.body.published,
						  req.body.tags,
						  req.body.views,
						  req.body.likes,
						  req.body.bookmarks,
						  req.body.responses,
						  req.body.response_parent,
						  req.body.tagline], 
		function(err, resp) {
			if (err) { console.log(err) }})
	},

	GetLastArticleID : function(req, res) {
		db.query('SELECT MAX(id) FROM articles', function(err, resp) {
			if (err) { console.log(err) } else {
				res.send(resp)}})
	},

	GetArticle : function(req, res) {
		db.article_get_one([req.params.article_id], function(err, resp) {
			if (err) { console.log(err) } else {
				res.send(resp)}})
	},

	GetHeadlinesByTags : function(req, res) {
		db.query("SELECT * FROM articles WHERE tags LIKE '%"+req.params.tag+"%'", function(err, resp) {
			if (err) { console.log(err)} else {
				res.status(200).send(resp)}})
	},

	GetAllPublishedByAuthorId : function(req, res) {
		db.article_get_all_ids([req.params.author_id],
			function(err, resp) {
			if (err) { console.log(err) } else { 
				res.send(resp)}})
	},

	GetBookmarks : function(req, res) {
		var results = []
		db.query("SELECT bookmarks_list FROM users WHERE id="+req.params.user_id, function(err, resp) {
			if (err) {console.log(err)} else {
				console.log(resp[0])
				var bookmarks = resp[0].bookmarks_list.split(',')

				for (var i = 0; i < bookmarks.length; i++) {
					(function(i) {
						db.query("select * from articles where id = " + bookmarks[i] + "ORDER BY id DESC",
						function(err1, resp1) {
							if (err) { console.log(err) } else {
								if (i == bookmarks.length-1) {
									results.push(resp1)
									res.send(results)
								} else {
									results.push(resp1)
								}
							}
							
						})
					})(i) 
				}
			}
		})
	}

}