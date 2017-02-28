app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'views/emploeelist.html'
			
 		})
		
		.otherwise({
			redirectTo : '/'
			
		})
}]);