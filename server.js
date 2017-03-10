const 	express = require('express')
		bodyParser = require('body-parser')
		massive = require('massive')
		cors = require('cors')
		port = 9999


//middle ware
const app = module.exports = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors())

//db connection
var conn = massive.connectSync({
	connectionString : "postgres://postgres:password@localhost/massive_demo"
});
app.set('db', conn);
var db = app.get('db');


//
//set controllers
//ALWAYS SET CONTROLLERS AFTER CALLING APP.SET
//
homeCtrl = require('./ctrl/home')
// bookmarksCtrl  = require('/ctrl/bookmarks')
// draftsCtrl = require('/ctrl/drafts')
// followInterestsCtrl  = require('/ctrl/followInterests')
// profileCtrl = require('/ctrl/profile')
// readingHistoryCtrl = require('/ctrl/readingHistory')
// settingsCtrl = require('/ctrl/settings')
// storiesCtrl = require('/ctrl/stories')
// textEditorCtrl = require('/ctrl/textEditor')
// viewArticleCtrl = require('/ctrl/viewArticle')
app.put('/api/articlenotification', homeCtrl.ArticleNotification)
app.get('/api/getnotifications', homeCtrl.GetNotifications)


app.get('/api/article/:id', homeCtrl.GetArticleTitle)
app.get('/api/article/response/:id', homeCtrl.GetArticleTitleByResponse)
app.get('/api/headlines/:cmd', homeCtrl.GetHeadlines)


app.get('/api/user/bookmarks/:id', homeCtrl.GetBookmarks)
app.put('/api/user/unlikearticle', homeCtrl.RemoveArticleLike)
app.put('/api/user/deletebookmark', homeCtrl.RemoveBookmark)
app.get('/api/user/tags/:id', homeCtrl.GetUserTags)
app.get('/api/user/articlesliked/:id', homeCtrl.GetArticleLikes)
app.post('/api/createuser', function(req, res) {
	db.test_create_notification([req.body.user_id,
		req.body.action,
		req.body.action_by_userid,
		req.body.action_on,
		req.body.date], function(err, resp) {
			if (err) {
				console.log(err)	
			}  else {
				res.status(200).send("wtf ever happened! yay!")
			}

		})
})


app.listen(port, function() {
	console.log("Alive and kicking on port ", port)
})