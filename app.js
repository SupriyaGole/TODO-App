var app;
var list = [];
app = angular.module('TodoApp', []);

app.service('StorageService', function () {
    this.store = function ($scope,RetrieveServices) {
        var keycode = event.keyCode;
        if(keycode==13) {
            list.push($scope.userInput);
            localStorage.setItem($scope.userInput, list.shift());
            document.getElementById("input").value="";
            RetrieveServices.retrieve($scope);
        }
    };
});

app.service('RetrieveServices',function () {
    this.retrieve = function ($scope) {
        $scope.todoList = localStorage;
    };
});

app.controller('TodoController', function ($scope, StorageService,RetrieveServices) {
    $scope.save = function () {
        StorageService.store($scope,RetrieveServices);
    };

    $scope.clear = function () {
        localStorage.clear();
    };
});
