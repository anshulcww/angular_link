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

.controller('AboutCtrl', function($scope,$state){
	$scope.values = [];
	$scope.toDoList = function(){
		console.log($scope.user);
		 $scope.values.push($scope.user.l);
	}
})