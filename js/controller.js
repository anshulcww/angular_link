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

.controller('WorkCtrl',function($scope, $state){
	$scope.employer = [
	{name: "Anshul" ,uname: "@anshul" , email: "Anshul@gmail.com", id: "123"},
	{name: "Anshul1" ,uname: "@anshul1" , email: "Anshul1@gmail.com", id: "123"},
	{name: "Anshul2" ,uname: "@anshul2" , email: "Anshul2@gmail.com", id: "124"},
	{name: "Anshul3" ,uname: "@anshul3" , email: "Anshul3@gmail.com", id: "125"}
	];

	$scope.modal= function(index){
		console.log(index);
		$scope.info = true;
		$scope.index = index;
	}
	$scope.cancel=function(){
		$scope.info= false;
	}
})
