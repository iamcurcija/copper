app = angular.module('wiresApp')

app.controller('MainCtrl', function ($scope) {

	$scope.dropped = [];

	$scope.onDropComplete=function(data,evt){
	    console.log("drop success, data:", data);
	    $scope.dropped.push(data);
	}

    $scope.test = "YO DAWG!!"

    $scope.draggables = [
    	{tyler: 'isSoCool'},
    	{tylerAlso: 'Cant type'}
    ]
 });