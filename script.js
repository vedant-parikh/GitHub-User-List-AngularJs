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

Functions to build modules.

Functions to avoid global variables.

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
*/



