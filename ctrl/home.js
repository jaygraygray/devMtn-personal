var app = require('../server')
var db = app.get('db')
module.exports = {
	GetUserName : function(req, res) {
		db.user_get_name([req.query.id], function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				console.log(resp)
				res.status(200).send(resp)
			}
		})
	},
	GetNotifications : function(req, res) {
		var notificationData
		db.header_get_notifications(function(err, resp) {
			if (err) {
				console.log(err)
			} else {
				res.status(200).send(resp)	
			}
		})
	}
}
	// GetUserName : function(req, res) {
	// 	db.user_get_name([req.body.userid], function(err, resp) {
	// 		if (err) {
	// 			console.log(err)
	// 		} else {
	// 			res.status(200).send(resp)
	// 		}
	// 	})
	// }
	
