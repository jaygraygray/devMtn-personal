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
		var final_response = []
		
		db.draft_get_all_ids([req.params.author_id],
			function(err, resp) {
			if (err) { console.log(err)
			} else { 

				
							//for each unique ID, get draft data
				for (var i = 0; i < resp.length; i++) {
					
					db.draft_get_most_recent_version(resp[i].article_id,
					function(err1, resp1){
						if(err) { console.log(err1)
						} else {
							var newPromise = new Promise(function(resolve, reject) {
							resolve(resp1)
							})
							final_response.push(newPromise)
							Promise.all(final_response)
							.then(function(res) { console.log("ASDF", res)})
						}
						
					})	

				}
		}

	})

	},

	
		//get all unique draft IDs for author_id

}