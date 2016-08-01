(function() {
	var app = 	angular.module("githubViewer");
	
	var UserController = function($scope, github, $routeParams){
		
		var onUserComplete = function(data){
			$scope.user = data;
			github.getRepos($scope.user).then(onRepos, onReposError);
		}
		
		var onError = function(reason){
			$scope.error = "Could not fetch the user"
		}
		
		var onRepos = function(data){
			$scope.repos = data;
		}
		
		var onReposError = function(reason){
			$scope.error = "Could not fetch the Repository"
		}
		
		
		$scope.repoOrderBy = "+stargazers_count";
		$scope.username = $routeParams.username;
		github.getUser($scope.username).then(onUserComplete, onError);

	}
	app.controller("UserController", UserController);

})();
