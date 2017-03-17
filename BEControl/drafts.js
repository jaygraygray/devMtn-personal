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
			 } else { res.send("Success!") }})},
	GetAll : function(req, res, next) {
		var newOne =[]
		db.draft_get_all_ids([req.params.author_id],
			function(err, resp) {
			if (err) { console.log(err)
			} else { 
				for (var i = 0; i < resp.length; i++) {
					(function(i) {
					db.draft_get_most_recent_version(resp[i].article_id,
					function(err1, resp1){
						if(err) { console.log(err1)
						} else {
							if (i == resp.length-1) {
								newOne.push(resp1)
								res.send(newOne)
							} else {
								newOne.push(resp1)
							}
						} 
					})	
					})(i)

				} 
		} 
	}) 

	}, 

}