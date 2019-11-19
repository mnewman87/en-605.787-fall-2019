(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['menu_items'];
	function ItemsController( menu_items) {
		var items = this;
		items.menu_items  = menu_items;
	}

})();
