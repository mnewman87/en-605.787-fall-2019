(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService'];
  function SignupController(SignupService) {
    var reg = this;

    reg.validate = function(shortname)
    {
     var promise  = SignupService.validateMenuItem(shortname);
     promise.then(function (response)
     {
      reg.valid = response;
      return reg.valid ;
    });
   };

   reg.submit = function () {
    SignupService.clearRegistration();

    var promise  = SignupService.validateMenuItem(reg.user.favoriteDish);
    promise.then(function (response)
    {
      reg.valid = response;
      if(reg.valid)
      {
        SignupService.addRegistration( reg.user.firstname,
          reg.user.lastname,
          reg.user.email,
          reg.user.phone,
          reg.user.favoriteDish);

        reg.saved = true;
      }
    });
};
}
})();
