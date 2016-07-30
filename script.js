/*
Functions as abstractions - Important concept of angularjs
var work = function() {
	console.log("working hard");
};

var dowork = function(f){
	console.log("Started working");
	try{
		f();
	}
	catch(ex){
		console.log(ex);
	}
};

dowork(work);

REVEALING MODULE PATTERNS: Functions to build modules.

# Do not make global variables, They are downright evil.

# Immediately invoked function expression
(var program = function() {
var createWorker = function(){

	var task1 = function(){
		console.log("Task1");
	};
	var task2 = function(){
		console.log("Task2");
	};
	return {
		job1: task1,
		job2: task2
	}
};


var worker = createWorker();
worker.job1();
worker.job2();
}());

Functions to avoid global variables.


*/
(function() {
	angular.module("githubViewer", []).controller("MainController", ["$scope", "$http", MainController]);
	//MainController.$inject = ["$scope","$http"];
	function MainController($scope, $http){

		var onUserComplete = function(response){
			$scope.user = response.data;
			$http.get($scope.user.repos_url).then(onRepos, onReposError);
		}

		var onError = function(reason){
			$scope.error = "Could not fetch the user"
		}
		var onRepos = function(response){
			$scope.repos = response.data;
		}
		var onReposError = function(reason){
			$scope.error = "Could not fetch the Repository"
		}
		$scope.search = function(username) {
			$http.get("https://api.github.com/users/" + username).then(onUserComplete, onError);
		}
		$scope.repoOrderBy = "+stargazers_count";
		$scope.message = "Github Viewer";
		$scope.username = "Angular";
	}
})();
