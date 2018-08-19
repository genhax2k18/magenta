var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.records = [
    "Alfreds Futterkiste",
    "Berglunds snabbköp",
    "Centro comercial Moctezuma",
    "Ernst Handel",
  ]
});
