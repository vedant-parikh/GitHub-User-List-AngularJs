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
	var app = 	angular.module("githubViewer", []);
	//MainController.$inject = ["$scope","$http"];
	
	var MainController = function($scope, github, $interval, $log, $location, $anchorScroll){
		
		var onUserComplete = function(data){
			$scope.user = data;
			github.getRepos($scope.user).then(onRepos, onReposError);
		}
		
		var onError = function(reason){
			$scope.error = "Could not fetch the user"
		}
		
		var onRepos = function(data){
			$scope.repos = data;
			$location.hash("userDetails");
			$anchorScroll();
		}
		
		var onReposError = function(reason){
			$scope.error = "Could not fetch the Repository"
		}
		
		var decrementCountdown= function(){
			$scope.countdown -= 1;
			if($scope.countdown < 1) {
				$scope.search($scope.username);
			}
		}
		
		var countdownInterval = null;
		var startCountdown = function(){
			countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
		}
		
		$scope.search = function(username) {
			$log.info("searching for " + username);
			github.getUser(username).then(onUserComplete, onError);
			if(countdownInterval){
				$interval.cancel(countdownInterval);
				$scope.countdown = null;
			}
		}
		
		$scope.repoOrderBy = "+stargazers_count";
		$scope.message = "Github Viewer";
		$scope.username = "Angular";
		$scope.countdown = 5;
		
		startCountdown();
	}
	app.controller("MainController", MainController);

})();
