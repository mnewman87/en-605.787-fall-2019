(function () {
  'use strict';

  angular.module('public')
  .service('SignupService', SignupService);
  
  SignupService.$inject =['$http', 'ApiPath']
  function SignupService($http, ApiPath) {

    var suservice = this;

    var signupInfo={
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      menuItem: "", 
      registered: false,
      imagePath: "",
      name: "",
      description: "" };
  //  var items= [];
  suservice.addRegistration = function(firstName, lastName, email, phone, shortName)
  {
   var promise = suservice.getMenuItem(shortName);

   promise.then(function (response)
   {
    var menuItem = response;
    signupInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      shortName: shortName,
      registered: true, 
      imagePath: ApiPath + "/images/" + shortName +".jpg",
      name: menuItem.name,
      description:menuItem.description
    };
  });
 }

 suservice.getRegistration = function()
 {
  return signupInfo;
}

suservice.clearRegistration = function()
{
  signupInfo={
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    menuItem: "", 
    registered: false,
    imagePath: "" ,
    name: "",
    description: ""};
  }

  suservice.validateMenuItem = function(shortName)
  {
    //https://mnewman-module10.herokuapp.com/menu_items/A1.json
    if(shortName)
    {
      var api = ApiPath + '/menu_items/' + shortName +'.json';
      return $http.get(api).then(function (response) {

        return true;

      })
      .catch(function (data)
      {
        return false;
      });
    }
    else 
    {
      return false;
    }
  }

  suservice.getMenuItem = function(shortName)
  {
    //https://mnewman-module10.herokuapp.com/menu_items/A1.json
    if(shortName)
    {
      var api = ApiPath + '/menu_items/' + shortName +'.json';
      return $http.get(api).then(function (response) {

        return response.data;

      });
    }
    else 
    {
      return false;
    }
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