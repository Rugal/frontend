    var foodApp = angular.module('foodApp', []);


    foodApp.controller('menuController',['$http', function($http){
	

        var rest=this;
        rest.menu=[];
					
         this.send=function(mealtype){$http.get("https://food-for-you.herokuapp.com/menu?meal=" + mealtype).success(function(response){
         //this.send=function(){$http.get('https://food-for-you.herokuapp.com/menu?meal=breakast').success(function(response){
            
			rest.menu=response.data;	});
        		
		};
    }]);