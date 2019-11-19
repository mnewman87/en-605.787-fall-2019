(function () {
	'use strict';

	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'items.html',
		bindings: {
			menu_items: '<',
		}
	});
})();
