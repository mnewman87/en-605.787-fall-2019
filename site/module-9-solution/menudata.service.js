(function () {
  'use strict';

  angular.module('data', [])
  .service('MenuDataService', MenuDataService);
  
  MenuSearchService.$inject =['$http']
  function MenuDataService($http) {

    var service = this;
   
	  
	      service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method:"GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
      }).then(function(result){
      
        return result;
      });
    };
	  
	     service.getAllCategories = function () {
      return $http({
        method:"GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function(result){
      
        return result;
      });
    };
    };
})();