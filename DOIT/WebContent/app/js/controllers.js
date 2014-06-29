'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProjectDetails', ['$scope', function($scope) {
     $scope.message = "Hello This message is from View 1";
    $scope.projects= [
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
    
  }])
  .controller('ProjectList', ['$scope','$routeParams', function($scope,$routeParams) {
    $scope.message = "Hello This message is from View 2";
       $scope.projects1= [
                          {   "name"  : "Hu-Assignment1",
                        	  "coordinators":[ {"coordinatorName":"Chandan",
                    		 					"coordinatorImage":"../img/1.jpg"
                    		 				},
                    		 				 {"coordinatorName":"Vaibhav",
                        		 				"coordinatorImage":"../img/1.jpg"
                        		 			}
                    		 				],
                    	 "description": " First assignment for demo purpose",
                    	 "tasks":[
								{	
									"taskName" : "Create index page",
									"taskDescription" : "Create a home page for the project",
									"priority" : "Showstopper",
									"assignedTo" : "Priyanka",
									"dueDate" : 	"29/06/2014",
									"createdOn" : "27/06/2014",
									"status"	: "../img/complete.png"
								},

								{
									"taskName" : "Improve UI & UX",
									"taskDescription" : "Create more pleasing UI",
									"priority" : "Medium",
									"assignedTo" : "Saurav",
									"dueDate" : "01/07/2014",
									"createdOn" : "27/06/2014",
									"status" : "../img/pending.jpg"
								}
							]
                    	 
                         
                     },
                     {   "name"  : "Hu-Assignment2",
                   	  "coordinators":[ {"coordinatorName":"shubhi",
               		 					"coordinatorImage":"../img/1.jpg"
               		 				},
               		 				 {"coordinatorName":"Anjali",
                   		 				"coordinatorImage":"../img/1.jpg"
                   		 			}
               		 				],
               	 "description": " First assignment for demo purpose",
               	 "tasks":[
							{	
								"taskName" : "Create index page",
								"taskDescription" : "Create a home page for the project",
								"priority" : "Showstopper",
								"assignedTo" : "Priyanka",
								"dueDate" : 	"29/06/2014",
								"createdOn" : "27/06/2014",
								"status"	: "../img/complete.png"
							},

							{
								"taskName" : "Improve UI & UX",
								"taskDescription" : "Create more pleasing UI",
								"priority" : "Low",
								"assignedTo" : "Priyanka",
								"dueDate" : "01/07/2014",
								"createdOn" : "27/06/2014",
								"status" : "../img/pending.jpg"
							}
						]
               	 
                    
                },
                {   "name"  : "Hu-Assignment3",
              	  "coordinators":[ {"coordinatorName":"Rahul",
          		 					"coordinatorImage":"../img/1.jpg"
          		 				},
          		 				 {"coordinatorName":"Rahul",
              		 				"coordinatorImage":"../img/1.jpg"
              		 			}
          		 				],
          	 "description": " First assignment for demo purpose",
          	 "tasks":[
						{	
							"taskName" : "Create index page",
							"taskDescription" : "Create a home page for the project",
							"priority" : "Showstopper",
							"assignedTo" : "Priyanka",
							"dueDate" : 	"29/06/2014",
							"createdOn" : "27/06/2014",
							"status"	: "../img/complete.png"
						},

						{
							"taskName" : "Improve UI & UX",
							"taskDescription" : "Create more pleasing UI",
							"priority" : "Low",
							"assignedTo" : "Priyanka",
							"dueDate" : "01/07/2014",
							"createdOn" : "27/06/2014",
							"status" : "../img/pending.jpg"
						}
					]
          	 
               
           },
                     
                 ];
       
      
		for (var i=0;i<$scope.projects1.length;i++)
			{
				if($scope.projects1[i].name==$routeParams.name)
					{
						$scope.details=$scope.projects1[i];
						
					}
				
			}
		
  }]);

 

var ModalDemoCtrl = function ($scope, $modal, $log) {

	  $scope.items = ['item1', 'item2', 'item3'];

	  $scope.open = function (size) {

	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
	};

	// Please note that $modalInstance represents a modal window (instance) dependency.
	// It is not the same as the $modal service used above.

	var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

	  $scope.items = items;
	  $scope.selected = {
	    item: $scope.items[0]
	  };

	  $scope.ok = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	};
	var DatepickerDemoCtrl = function ($scope) {
		  $scope.today = function() {
		    $scope.dt = new Date();
		  };
		  $scope.today();

		  $scope.clear = function () {
		    $scope.dt = null;
		  };

		  // Disable weekend selection
		  $scope.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		  };

		  $scope.toggleMin = function() {
		    $scope.minDate = $scope.minDate ? null : new Date();
		  };
		  $scope.toggleMin();

		  $scope.open = function($event) {
		    $event.preventDefault();
		    $event.stopPropagation();

		    $scope.opened = true;
		  };

		  $scope.dateOptions = {
		    formatYear: 'yy',
		    startingDay: 1
		  };

		  $scope.initDate = new Date('2016-15-20');
		  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		  $scope.format = $scope.formats[0];
		};	