angular.module("appName", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
console.log("as;ldkfjas;dfghjklkjhgfdlkfj")
$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'index.html',
		controller: 'homeCtrl'
	})
	.state('new-story', {
		url: '/new-story',
		templateUrl: '/views/text-editor.html'
		//controller: 'textEditorCtrl'
	});

	$urlRouterProvider.otherwise('/')
})
angular.module('appName')
.service('articleSvc', function($http) {

this.getHeadlines = function(cmd) {
	return $http.get('/api/headlines/' + cmd).then(function(resp) {
		return resp
	})
}

this.createNotification = function(notObj) {
	return $http.put('/api/articlenotification', notObj).then(function(resp) {
		return resp
	})
}

this.unlikeArticle = function(deleteObj) {
	return $http.put('/api/user/unlikearticle', deleteObj).then(function(resp) {
		return resp
	})
}

this.unbookmarkArticle = function(deleteObj) {
	return $http.put('/api/user/deletebookmark', deleteObj).then(function(resp) {
		return resp
	})
}


})
angular.module("appName")
.directive('headerMenu', function(){
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header.html',
		controller: function($scope, headerSvc) {
			$scope.search = true
			$scope.userMenu = true
			$scope.notificationsMenu = true
			$scope.getNotifcations = headerSvc.getNotifications().then(function(resp){
				$scope.notifications = resp.data

				for (var i = 0; i < $scope.notifications.length; i++) {
					
					$scope.notifications[i].title = ''

					for (var prop in $scope.notifications[i]) {

						// Create proper textual responses
						switch($scope.notifications[i].action) {
							case 'l':
							$scope.notifications[i].action = 'PLEASEsdfsdfHANGE';
							break;
							case 'b':
							$scope.notifications[i].action = 'bookmarked your';
							break;
							case 'f':
							$scope.notifications[i].action = 'followed you';
							break;
							case 's':
							$scope.notifications[i].action = 'shared your';
							break;
							case 'r':
							$scope.notifications[i].action = 'responded to';
							break;
						}
					}

					//When using asynch calls within a loop
					//you need to use a closure to capute the value of i at each iteration
					if ($scope.notifications[i].article === true) {
						(function(i) {
							headerSvc.getArticleTitle($scope.notifications[i].action_on_id)
							.then(function(resp) {
								$scope.notifications[i].title = ' your article ' + resp.data[0].title
							})
						})(i);	
					}

					if ($scope.notifications[i].response === true) {
						(function(i) {
							headerSvc.getArticleTitleByResponse($scope.notifications[i].action_on_id)
							.then(function(resp) {
								$scope.notifications[i].title = resp.data[0].title
							})
						})(i);
					}
				}
			})	
		}
	}
}).directive('headerMenuForWriting', function(){
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header-for-writing.html',
		controller: function($scope, headerSvc) {
			$scope.search = true
			$scope.userMenu = true
			$scope.notificationsMenu = true
			$scope.getNotifcations = headerSvc.getNotifications().then(function(resp){
				$scope.notifications = resp.data

				for (var i = 0; i < $scope.notifications.length; i++) {
					
					$scope.notifications[i].title = ''

					for (var prop in $scope.notifications[i]) {

						// Create proper textual responses
						switch($scope.notifications[i].action) {
							case 'l':
							$scope.notifications[i].action = 'PLEASEsdfsdfHANGE';
							break;
							case 'b':
							$scope.notifications[i].action = 'bookmarked your';
							break;
							case 'f':
							$scope.notifications[i].action = 'followed you';
							break;
							case 's':
							$scope.notifications[i].action = 'shared your';
							break;
							case 'r':
							$scope.notifications[i].action = 'responded to';
							break;
						}
					}

					//When using asynch calls within a loop
					//you need to use a closure to capute the value of i at each iteration
					if ($scope.notifications[i].article === true) {
						(function(i) {
							headerSvc.getArticleTitle($scope.notifications[i].action_on_id)
							.then(function(resp) {
								$scope.notifications[i].title = ' your article ' + resp.data[0].title
							})
						})(i);	
					}

					if ($scope.notifications[i].response === true) {
						(function(i) {
							headerSvc.getArticleTitleByResponse($scope.notifications[i].action_on_id)
							.then(function(resp) {
								$scope.notifications[i].title = resp.data[0].title
							})
						})(i);
					}
				}
			})	
		}
	}
})
.directive('makeTagsSticky', function($window) {
	var win = angular.element($window)
	return {
		restrict: 'AE',
		link: function(scope, ele, attrs) {
			var topClass = attrs.makeTagsSticky
			var offsetTop = ele.prop('offsetTop') + 70;
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= offsetTop) ? 'addClass' : 'removeClass']('no-moving-for-you');
			});
		}
	}
})
angular.module('appName')
.service('headerSvc', function($http) {

this.getArticleTitleByResponse = function(id) {
	return $http.get('/api/article/response/' + id).then(function(resp) {
		return resp
	})
}

this.getArticleTitle = function(id) {
	return $http.get('/api/article/' + id).then(function(resp) {
		return resp
	})
}

this.getNotifications = function() {
	return $http.get('/api/getnotifications').then(function(resp) {
		return resp
	})
}

})
angular.module('appName')
.controller('homeCtrl', function($scope, homeSvc, articleSvc, userSvc) {

	var userID = 3
	//takes user ID as parameter
	homeSvc.getUserTags(userID).then(function(resp) {
		$scope.tags = resp.data[0].tags.split(', ')
	})

	
}).directive('sideMenu', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/home.html',
		scope: true,
		controller: 'homeCtrl'
	}
}).directive('storyHolder', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/story-holder.html'
	}
}).directive('suggestWriters', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/suggest-writers.html'
	}
}).directive('listArticles', function() {
	return {
		restrict: 'E',
		scope: {
			text: '@',
			likeArticle : '&'
		},
		templateUrl: '/views/directives/story-holder.html',
		controller : function($scope, articleSvc, userSvc) {
			//grab article IDs user has liked
			userSvc.getArticleLikes(3).then(function(resp) {
				console.log(resp.data[0])
				return resp.data[0]
			}).then(function(userArticlesResults) {
			//get the headline info for articles according to $scope.text input
			articleSvc.getHeadlines($scope.text).then(function(resp) {
				$scope.articles = resp.data


					//check to see if article ID is present in the user's liked list


					var articles = userArticlesResults.articles_liked.split(',').map(Number)
					var bookmarks = userArticlesResults.bookmarks_list.split(',').map(Number)
				//loop through all results to see if user has liked each specific article
				for (let i = 0; i < $scope.articles.length; i++) {
					//add userLikedProperty
					$scope.articles[i].userLikedArticle
					$scope.articles[i].userBookmarkedArticle

					
					if (articles.indexOf($scope.articles[i].id) === -1) {
						$scope.articles[i].userLikedArticle = false
					} else {
						$scope.articles[i].userLikedArticle = true
					}
					
					//check to see if article ID is present in bookmarks list
					if (bookmarks.indexOf($scope.articles[i].id) === -1) {
						$scope.articles[i].userBookmarkedArticle = false
					} else {
						$scope.articles[i].userBookmarkedArticle = true
					}	
				}
				return $scope.articles
			}).then(function(articles) {
			$scope.likeArticle = function (id) {
				//loop through articles, if ID matches article ID, execute like
				for (let i = 0; i < articles.length; i++) {
					if (articles[i].id == id) {
						//change button styles
						$scope.articles[i].userLikedArticle = ! $scope.articles[i].userLikedArticle
						//if the user clicks an unliked article, create notification
						if ($scope.articles[i].userLikedArticle === true) {
							$scope.articles[i].likes++;
							var obj = {
								article_id_array : ',' + id,
								article_id_just_int : id,
								user_id : 3,
								user_id_notified: $scope.articles[i].author_id,
								action: "L",
								date : new Date(),
								article_boolean : true,
								response_boolean: false,
								self_boolean: false
							}
							articleSvc.createNotification(obj)
							// if use clicks an already liked article, remove like from their list
						} else {
							var deleteObj = {
								user_id : 3,
								unliked_id : ','+ $scope.articles[i].id
							}
							articleSvc.unlikeArticle(deleteObj)
						}	
					}
				}	
				}

				$scope.bookmarkArticle = function(id) {
				for (let i = 0; i < articles.length; i++) {
					if (articles[i].id == id) {
						//change button styles
						$scope.articles[i].userBookmarkedArticle = ! $scope.articles[i].userBookmarkedArticle
						//if the user clicks an unliked article, create notification
						if ($scope.articles[i].userBookmarkedArticle === true) {
							$scope.articles[i].likes++;
							var obj = {
								article_id_array : ',' + id,
								article_id_just_int : id,
								user_id : 3,
								user_id_notified: $scope.articles[i].author_id,
								action: "B",
								date : new Date(),
								article_boolean : true,
								response_boolean: false,
								self_boolean: false
							}
							articleSvc.createNotification(obj)
							// if use clicks an already liked article, remove like from their list
						} else {
							var deleteObj = {
								user_id : 3,
								unliked_id : ','+ $scope.articles[i].id
							}
							articleSvc.unbookmarkArticle(deleteObj)
						}	
					}
				}	
				}

			})	
		})
		}

	};
})
angular.module('appName')
.service('homeSvc', function($http) {

//user ID as parameter
this.getUserTags = function(id) {
	return $http.get('/api/user/tags/' + id).then(function(resp) {
		return resp
	})
}


//define all API calls necessary for listArticles directive
// all: list all artilces in increments of X
// userTags: list articles based on users tags
// tag: get articles based on tag


})
angular.module('appName')
.service('userSvc', function($http) {



this.getArticleLikes = function(id) {
	 return $http.get('/api/user/articlesliked/' + id).then(function(resp) {
		return resp
	})
}

this.getBookmarks = function(id) {
	return $http.get('api/user/bookmarks/' + id).then(function(resp) {
		return resp
	})
}



})