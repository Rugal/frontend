    var foodApp = angular.module('foodApp', []);


    foodApp.controller('menuController',['$http', function($http){
	
		
        var rest=this;
        rest.menu=[];
					
         this.send=function(mealtype){$http.get("https://food-for-you.herokuapp.com/menu?meal=" + mealtype).success(function(response){
            
			rest.menu=response.data;	
        	var uri_encode= rest.menu.restaurant.map;
			var uri = decodeURIComponent(uri_encode);
			
		
			
			document.getElementById("menu").innerHTML = "<iframe src="+"https://www.google.com/maps/embed?" +uri+", width=400px, height=300px></iframe>";
			});

		};
    }]);
			
	foodApp.controller('mapCtrl', function($scope){ 	
		$scope.showmap = false;
		
			$scope.mapicon = function() {
				$scope.showmap = !$scope.showmap;       
			}

	});
	
