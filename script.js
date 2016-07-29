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
	angular.module("appName", []).controller("MainController", MainController);
	MainController.$inject = ["$scope"];
	function MainController($scope){
		var person = {
			firstname: "Vedant",
			lastname: "Parikh",
			imageSrc: "http://img2.timeinc.net/people/i/2015/news/151123/priyanka-1024.jpg" 
		};

		$scope.message = "Hello, angular";
		$scope.person = person;
	}
})();
