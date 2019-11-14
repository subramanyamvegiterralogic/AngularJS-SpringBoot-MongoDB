angular.module("crudApp",[])
		.controller("GeneralController", 
		function GeneralController($scope, $http, $window) {	
	$scope.buttonText = "Search"
	$scope.getData = function(){
		if($scope.employee_age !== undefined 
				&& $scope.employee_age.length>0
				&& $scope.employee_city !== undefined 
				&& $scope.employee_city.length>0){
			try{
				$http.get('service/emp-city-age/'+$scope.employee_city+','+$scope.employee_age)
				.then(function(response) {
					$scope.employees = response.data;
				}, function(response) {
					$window.alert("Please check Your Server Status and Try again later...")
				})				
			} catch (e) {
				$window.alert("Please check Your Server Status and Try again later...")
			}
		} else if($scope.employee_city !== undefined 
				&& $scope.employee_city.length>0 ){
			try{
				$http.get('service/employeeByCity/'+$scope.employee_city)
				.then(function successCallback(response) {
					$scope.employees = response.data;
				}, function errorCallback(response) {
					$window.alert("Please check Your Server Status and Try again later...")
				})
			} catch (e) {
				$window.alert("Please check Your Server Status and Try again later...")
			}
			
		} else if($scope.employee_age !== undefined 
				&& $scope.employee_age.length>0){
			try{
				$http.get('service/employeeByAge/'+$scope.employee_age)
				.then(function successCallback(response) {
					$scope.employees = response.data;
				}, function errorCallback(response) {
					$window.alert("Please check Your Server Status and Try again later...")
				})
			} catch (e) {
				$window.alert("Please check Your Server Status and Try again later...")
			}
		} else{
			$window.alert("Please enter Employee Age or City");
            return;
		}
	}
});