var app = angular.module('myApp', []);

app.controller('restCtrl', function($scope, $http) {

  $http.get("https://food-for-you.herokuapp.com/menu")
   .success(function (response) {
	  $scope.names = response.data;});
  });
  
app.controller('button',['$scope','$http', function($scope, $http) {
    $scope.triggerElement = true;
    var myElement= document.getElementById('myElement');
    angular.element(myElement).triggerHandler('click');

    $scope.showbTriggerElement = function() {
        $scope.triggerElement = false;
		app.controller('restCtrl1', function($scope, $http) {

			$http.get("https://food-for-you.herokuapp.com/menu?meal=breakfast")
				.success(function (response) {
					$scope.names = response.data;});
		});
	}
	
	$scope.showlTriggerElement = function() {
        $scope.triggerElement = false;
		app.controller('restCtrl2', function($scope, $http) {

			$http.get("https://food-for-you.herokuapp.com/menu?meal=lunch")
				.success(function (response) {
					$scope.names = response.data;});
		});
	}
    $scope.showdTriggerElement = function() {
        $scope.triggerElement = false;
		app.controller('restCtrl3', function($scope, $http) {

			$http.get("https://food-for-you.herokuapp.com/menu?meal=dinner")
				.success(function (response) {
					$scope.names = response.data;});
		});
	}
	
    $scope.hideTriggerElement = function() {
        $scope.triggerElement = true;
    }
}]);