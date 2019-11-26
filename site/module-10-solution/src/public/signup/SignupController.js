(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var reg = this;

  reg.submit = function () {
  	reg.saved = true;
  	reg.valid = true; 


  	//change this when the sevrver is setup
//Check if the menu item short name is valid
//return error if not

//Otherwise, save data
  };
}


})();
