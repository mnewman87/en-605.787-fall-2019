(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuy = this;

   
    ShoppingListService.addItem("Bunch of Grapes", 1);
    ShoppingListService.addItem("Bananas", 6);
    ShoppingListService.addItem("Cookies", 10);
    ShoppingListService.addItem("Donuts", 12);
    ShoppingListService.addItem("Pizza", 1);

    toBuy.items = ShoppingListService.getItems();

      toBuy.boughtItem = function (itemIndex) {
    ShoppingListService.boughtItem(itemIndex);};
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListService.getBoughtItems();
}

function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [];
var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

    service.boughtItem = function (itemIdex) {
      boughtItems.push(items[itemIdex].name, items[itemIdex].quantity);
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

   service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();
