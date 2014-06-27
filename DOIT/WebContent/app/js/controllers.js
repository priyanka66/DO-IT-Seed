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
    
  }]);
  .controller('ProjectList', ['$scope','$routeParams', function($scope,$routeParams) {
    $scope.message = "Hello This message is from View 2";
       $scope.projects1= [
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
       
       console.log($scope.projects1);
		for (var i=0;i<$scope.project1.length;i++)
			{
				if($scope.projects1[i].name==$routeParams.name)
					{
						$scope.details=$scope.projects1[i];
					}
			}
  }]);

 
