(function() {
	var app = 	angular.module("githubViewer");
	
	var RepoController = function($scope, github, $routeParams){
		
		var onRepoComplete = function(data){
			$scope.repo = data;
		};

		var onError = function(reason){
			$scope.error = reason;	
		};

		var reponame = $routeParams.reponame;
		var username = $routeParams.username;

		github.getReposDetails(username, reponame).then(onRepoComplete, onError);



	}
	app.controller("RepoController", RepoController);

})();
