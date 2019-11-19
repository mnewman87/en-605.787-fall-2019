(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);
  
  MenuDataService.$inject =['$http']
  function MenuDataService($http) {

    var service = this;

    var items= [];

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method:"GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
      }).then(function(result){

        return result.data.menu_items;
      });
    };

    service.getAllCategories = function () {
      return $http({
        method:"GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function(result){

        return result.data;
      });
    };
  };
})();