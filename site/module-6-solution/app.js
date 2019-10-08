(function () {
	'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {
	$scope.message = "No Check Done yet";
	$scope.dishes = "";
	$scope.checkIfTooMuch = function () {
		var myMessage = "Check Not Implemented";
		var messageDivStyle = document.getElementById("messageDiv").style;
		var lunchMenuStyle = document.getElementById("lunch-menu").style;

		messageDivStyle.border = "";
		if($scope.dishes === "")
		{
			lunchMenuStyle.border = "thick solid red";
			messageDivStyle.color = "red";
			myMessage = "Please Enter Data First";
		}
		else
		{
			var numberOfDishes = getNumberOfDishes($scope.dishes);
			if(numberOfDishes == 0)
			{
				lunchMenuStyle.border = "thick solid red";
				messageDivStyle.color = "red";
				myMessage = "Please Enter Data First";
			}
			else if(numberOfDishes <= 3 )
			{
				myMessage = "Enjoy!";
				lunchMenuStyle.border = "thick solid green";
				messageDivStyle.color = "green";
			}
			else
			{
				myMessage = "Too Much!";
				lunchMenuStyle.border = "thick solid green"
				messageDivStyle.color = "Green;";
			}

		}

		$scope.message = myMessage;
	};

	function getNumberOfDishes(mystr){
		var numberOfDishes = mystr.split(',');
		numberOfDishes = numberOfDishes.filter(checkDish);
		return numberOfDishes.length;

	};

	function checkDish(dish){
		return dish != "";
	}
}

})();
