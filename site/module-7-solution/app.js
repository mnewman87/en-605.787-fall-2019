(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    ShoppingListCheckOffService.addItem("Bunch of Grapes", 1, 5);
    ShoppingListCheckOffService.addItem("Bananas", 6, 8);
    ShoppingListCheckOffService.addItem("Cookies", 10, 1);
    ShoppingListCheckOffService.addItem("Donuts", 12, 3);
    ShoppingListCheckOffService.addItem("Pizza", 1, 2);

    toBuy.items = ShoppingListCheckOffService.getItems();

    toBuy.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);};
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;
      alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
      alreadyBought.calculateCost = function MoneyFilter(input) {
        input = input.pricePerItem * input.quantity;
        return input;
      };
    }

    function ShoppingListCheckOffService() {
      var service = this;

  // List of shopping items
  var items = [];
  var boughtItems = [];

  service.addItem = function (itemName, quantity, pricePerItem) {
    var item = {
      name: itemName,
      quantity: quantity,
      pricePerItem: pricePerItem
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.boughtItem = function (itemIdex) {
   var boughtItem = {
    name: items[itemIdex].name,
    quantity: items[itemIdex].quantity,
    pricePerItem:  items[itemIdex].pricePerItem
  };
  boughtItems.push(boughtItem);
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
