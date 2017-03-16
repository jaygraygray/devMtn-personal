var app = require('../server')
var db = app.get('db')
module.exports = {

	UpdateDraft : function(req, res) {
		db.draft_update([req.body.author_id,
						  req.body.article_id,
						  req.body.date,
						  req.body.draftBody,
						  req.body.tags], 
		function(err, resp) {
			if (err) { console.log(err)
			 } else { res.send("Success!") }})}

}