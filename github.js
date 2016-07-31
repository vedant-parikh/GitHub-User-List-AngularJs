(function(){
	var module = angular.module("githubViewer");

	var github = function($http){
		var getUser = function(username){
			console.log("in github "+username);
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

		return{
			getUser: getUser,
			getRepos: getRepos
		};
	};

	module.factory("github",github);
	
}());