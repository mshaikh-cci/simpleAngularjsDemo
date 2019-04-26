var myapp = angular.module("myapp", [])

myapp.controller("HelloController", function ($scope) {
    var employee = {
        firstname: "david",
        lastname: "shaikh",
        gender: "male"
    }
    $scope.employee = employee;
        $scope.helloTo = {};
        $scope.helloTo.title = "AngularJS";
        $scope.message = "Angularjs tutorial";
    });