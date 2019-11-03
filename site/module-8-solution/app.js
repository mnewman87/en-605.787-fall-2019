(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController )
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.searchTerm = "";
    list.narrowItDown =function(){

      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
      promise.then(function (response)
      {
        list.items = response;
      })
    };

    list.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };

  }

  function FoundItems(){
    var ddo={
      templateUrl: 'foundItems.html',
      scope:{
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'list',
      bindToController: true
    }; 
    return ddo;
  }


  function NarrowItDownDirectiveController() {
    var list = this;

    list.isListEmpty = function () {
      if(list.items.length == 0 ){
        return true;
      }

      return false;
    };
  }


  MenuSearchService.$inject =['$http']
  function MenuSearchService($http) {

    var service = this;
    var items = [];

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getMatchedMenuItems = function (searchTerm) {
      var foundItems = [];
      //TODO Implement
      return $http({
        method:"GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function(result){
        if(searchTerm)
        {
          for (var i = 0; i < result.data.menu_items.length; i++)
          {
            var description = result.data.menu_items[i].description;
            if(description.toLowerCase().indexOf(searchTerm) !== -1){
              foundItems.push( result.data.menu_items[i]);
            }
          }
        }
        items = foundItems;
        return items;
      });
    };
  }
})();