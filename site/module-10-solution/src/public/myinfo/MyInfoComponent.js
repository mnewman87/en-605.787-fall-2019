(function () {
	'use strict';

	angular.module('public')
	.component('myinfo', {
		templateUrl: 'myInfo.html',
		bindings: {
			info: '<',
		}
	});
})();
