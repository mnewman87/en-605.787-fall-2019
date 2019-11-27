(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['info'];
function MyInfoController(info) {
  var myinfo = this;
  myinfo.info = info;
}

})();
