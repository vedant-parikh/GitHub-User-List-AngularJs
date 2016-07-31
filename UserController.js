(function() {
	var app = 	angular.module("githubViewer");
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
