// angular.module(["AppController"]).controller("AppController",function($scope,$http) {
// $scope.addContact = function() {
//     console.log($scope.contact);
//     $http.post("/employeedetails",$scope.contact)
//       .then(function(response) {
//         console.log(response.data);
//         refresh();
//       });
//   };
// }
angular.module("AppController",[]).controller('AppController', ['$scope','$http',function ($scope,$http) { 
// angular.module("joinCIApp",["AppController"]);
// app.controller("AppController",function($scope,$http) {
	$scope.addContact = function() {
		console.log($scope.contact);
   		 $http.post("/employeedetails",$scope.contact)
      			.then(function(response) {
       				 console.log(response.data);
       			})
	}
}]);