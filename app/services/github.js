(function(){
	var module = angular.module("githubViewer");

	var github = function($http){
		var getUser = function(username){
			return $http.get("https://api.github.com/users/" + username)
			.then(function(response){
				return response.data;
			});
		};

		var getRepos = function(user){
			return $http.get(user.repos_url)
			.then(function(response){
				return response.data;
			});
		};

		var getReposDetails = function(username, reponame){
			var repo;
			var repoUrl = "https://api.github.com/repos/" + username +"/" + reponame;
			return $http.get(repoUrl)
					.then(function(response){
						return response.data;
					});
		};

		return{
			getUser: getUser,
			getRepos: getRepos,
			getReposDetails: getReposDetails
		};
	};

	module.factory("github",github);
	
}());