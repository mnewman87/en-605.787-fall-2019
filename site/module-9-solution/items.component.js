(function () {
'use strict';

angular.component('items', {
  templateUrl: 'shoppingList.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<',
    myTitle: '@title',
    onRemove: '&'
  }
});

ItemsComponentController.$inject = ['$scope', '$element']
function ItemsComponentController($scope, $element) {
  var $ctrl = this;


  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };

  $ctrl.$onInit = function () {
    console.log("We are in $onInit()");
  };

  $ctrl.$onChanges = function (changeObj) {
    console.log("Changes: ", changeObj);
  }

  $ctrl.$postLink = function () {
    $scope.$watch('$ctrl.cookiesInList()', function (newValue, oldValue) {
      console.log($element);
      if (newValue === true) {
        // Show warning
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      }
      else {
        // Hide warning
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      }
    });
  };
}


})();
