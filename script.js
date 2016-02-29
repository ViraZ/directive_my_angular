var app = angular.module('myApplicationModule', ['uiGmapgoogle-maps']);
app.controller("myCtrl", function($scope){
    $scope.test = "Angular test";
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});