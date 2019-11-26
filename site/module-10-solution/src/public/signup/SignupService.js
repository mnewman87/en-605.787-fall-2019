(function () {
  'use strict';

  angular.module('data')
  .service('SignupService', SignupService);
  
  SignupService.$inject =['$http']
  function SignupService($http) {

    var service = this;

var signupInfo;
  //  var items= [];
  service.addRegistration = function(firstName, lastName, email, phone, menuItem)
  {
    signupInfo.firstName = firstName;
    signupInfo.lastName = lastName;
    signupInfo.email = email;
    signupInfo.phone = phone;
    signupInfo.menuItem = menuItem;
  }

    // service.getItemsForCategory = function (categoryShortName) {
    //   return $http({
    //     method:"GET",
    //     url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
    //   }).then(function(result){

    //     return result.data.menu_items;
    //   });
    // };

    // service.getAllCategories = function () {
    //   return $http({
    //     method:"GET",
    //     url: ("https://davids-restaurant.herokuapp.com/categories.json")
    //   }).then(function(result){

    //     return result.data;
    //   });
    // };
  };
})();