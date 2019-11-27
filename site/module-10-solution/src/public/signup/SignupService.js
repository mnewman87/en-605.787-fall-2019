(function () {
  'use strict';

  angular.module('public')
  .service('SignupService', SignupService);
  
  SignupService.$inject =['$http']
  function SignupService($http) {

    var suservice = this;

var signupInfo;
  //  var items= [];
  suservice.addRegistration = function(firstName, lastName, email, phone, menuItem)
  {
   signupInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    menuItem: menuItem }
  }

   suservice.getRegistration = function()
  {
    return signupInfo;
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