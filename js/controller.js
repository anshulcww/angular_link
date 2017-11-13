myApp.controller('HomeCtrl', function($scope, $state){
	$scope.user = {
		n: '',
		e: '',
		p: ''
	}
	$scope.register = function(){
		console.log($scope.user);
	}
})