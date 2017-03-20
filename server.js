const 	express = require('express')
		bodyParser = require('body-parser')
		massive = require('massive')
		cors = require('cors')
		port = 9991


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
homeCtrl 					= require('./BEControl/home')
// bookmarksCtrl  			= require('./BEControl/bookmarks')
draftsCtrl 					= require('./BEControl/drafts')
articlesCtrl				= require('./BEControl/articles')
// followInterestsCtrl 	 	= require('./BEControl/followInterests')
// profileCtrl 				= require('./BEControl/profile')
// readingHistoryCtrl 		= require('./BEControl/readingHistory')
// settingsCtrl 			= require('./BEControl/settings')
// storiesCtrl 				= require('./BEControl/stories')
// textEditorCtrl 			= require('./BEControl/textEditor')
// viewArticleCtrl 			= require('./BEControl/viewArticle')

/////////////////////////////////////////////////////////
/////////// DRAFTS 
/////////////////////////////////////////////////////////
app.post('/api/updatedraft/:id', draftsCtrl.UpdateDraft)
app.get('/api/getdrafts/:author_id', draftsCtrl.GetAll)
app.get('/api/deletedraft/:article_id', draftsCtrl.DeleteDraft)
app.get('api/editdraft/:article_id', draftsCtrl.EditDraft)

/////////////////////////////////////////////////////////
/////////// ARTICLES 
/////////////////////////////////////////////////////////
app.post('/api/createarticle', articlesCtrl.CreateArticle)

/////////////////////////////////////////////////////////
/////////// HOME
/////////////////////////////////////////////////////////
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