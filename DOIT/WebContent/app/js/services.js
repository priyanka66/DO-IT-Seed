
'use strict';


var module = angular.module('myApp.services', []);

module.service('ProjectsService', function() {
	var projectlist = [
	                     {   "name"  : "Hu-Assignment1",
	                         "description": " First assignment for demo purpose",
	                         "coordinators": ["Chandan","Vaibhav"]
	                     },
	                     {
	                    	 "name"  : "Hu-Assignment2",
	                         "description": " Random description about sijs, issovosdv",
	                         "coordinators": ["Shubi","Anjali","Vaibhav"]
	                     },
	                     {
	                    	 "name"  : "Hu-Assignment3",
	                         "description": " First assignment for demo purpose",
	                         "coordinators": ["Rahul","Anurag"]
	                     },
	                     {
	                    	 "name"  : "Hu-Assignment4",
	                         "description": " First assignment for demo purpose",
	                         "coordinators": ["Rahul","Nagarjun"]
	                     }
	                 ];
	this.list = function() {
		return projectlist;
	};
	
});
