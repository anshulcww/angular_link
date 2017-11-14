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
	$scope.ticks = [];
	$scope.toDoList = function(){
		$scope.values.push($scope.user.l);
		$scope.user.l = '';
	}
	$scope.checkList = function(){
		$scope.ticks.push({check:'done-true' , done:false});

	}
	$scope.removeList = function(index){
		$scope.values.splice(index,1);
		
		 
	}
})