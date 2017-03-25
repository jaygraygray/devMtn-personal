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
				res.send(resp)
			}
		})
	},

	GetArticle : function(req, res) {

		db.article_get_one([req.params.article_id], function(err, resp) {
			if (err) { console.log(err) } else {
				console.log(resp)
				res.send(resp)
			}
		})
	},

	GetHeadlinesByTags : function(req, res) {
		console.log(req.params.tag)
		db.query("SELECT * FROM articles WHERE tags LIKE '%"+req.params.tag+"%'", function(err, resp) {
			if (err) { console.log(err)
			} else {
				console.log(resp)
			res.status(200).send(resp)}})
	}

}