'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProjectDetails', ['$scope', function($scope) {
     $scope.message = "Hello This message is from View 1";
    $scope.projects= [
                     {   "name"  : "Hu-Assignment1",
                         "description": " First assignment for demo purpose",
                         "coordinators": ["Rahul","Nagarjun"]
                     },
                     {
                    	 "name"  : "Hu-Assignment2",
                         "description": " Random description about sijs, issovosdv",
                         "coordinators": ["Rahul","Nagarjun","Vaibhav"]
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
    
  }])
  .controller('ProjectList', ['$scope','$routeParams', function($scope,$routeParams) {
    $scope.message = "Hello This message is from View 2";
       $scope.projects1= [
                     {   "name"  : "Hu-Assignment1",
                    	 "coordinators": ["Rahul","Nagarjun"],
                    	 "description": " First assignment for demo purpose",
                    	 "tasks":[
								{
									"taskName" : "Create index page",
									"taskDescription" : "Create a home page for the project",
									"priority" : "0",
									"assignedTo" : "Priyanka",
									"dueDate" : 	"29/06/2014",
									"createdOn" : "27/06/2014"
								},

								{
									"taskName" : "Improve UI & UX",
									"taskDescription" : "Create more pleasing UI",
									"priority" : "2",
									"assignedTo" : "Priyanka",
									"dueDate" : "01/07/2014",
									"createdOn" : "27/06/2014"
								}
							]
                    	 
                         
                     },
                     {
                    	 "name"  : "Hu-Assignment2",
                         "description": " Random description about sijs, issovosdv",
                         "coordinators": ["Rahul","Nagarjun","Vaibhav"]
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
       
      
		for (var i=0;i<$scope.projects1.length;i++)
			{
				if($scope.projects1[i].name==$routeParams.name)
					{
						$scope.details=$scope.projects1[i];
						
					}
				
			}
  }]);

 
