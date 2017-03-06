var app = require('../server')
var db = app.get('db')
module.exports = {
	GetNotifications : function(req, res) {
		db.header_get_notifications(function(err, resp) {
			res.status(200).send(resp)	
			console.log(resp)
		})

	}
}