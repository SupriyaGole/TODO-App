var app;
var list = [];
app = angular.module('TodoApp', []);


app.controller('TodoController', function ($scope, StorageService,RetrieveServices,ClearServices) {
    $scope.save = function () {
        StorageService.store($scope,RetrieveServices);
    };

    $scope.showClear = function () {
        ClearServices.show($scope);
    };

    $scope.hideShow = function () {
        ClearServices.hide($scope);
    }

    $scope.deleteItem = function (thisRow,value) {
        ClearServices.delete(thisRow,value);
    };
});

app.service('StorageService', function () {
    this.store = function ($scope,RetrieveServices) {
        var keycode = event.keyCode;
        if(keycode==13) {
            list.push($scope.userInput);
            if(window.localStorage) {
                try {
                    localStorage.setItem($scope.userInput, list.shift());
                }catch(e){
                    if(e.code==22)
                        alert("Local storage is full");
                }
                document.getElementById("input").value = "";
                RetrieveServices.retrieve($scope);
            }
            else
                alert("Sorry!! local storage is disabled");
        }
    };
});

app.service('RetrieveServices',function () {
    this.retrieve = function ($scope) {
        $scope.todoList = localStorage;
    };
});

app.service('ClearServices',function () {
    this.show = function ($scope) {
        $scope.canShow = true;
    };

    this.hide = function ($scope) {
        $scope.canShow = false;
    };
    
    this.delete = function (thisRow,value) {
        localStorage.removeItem(value);
        var i = thisRow.$index;
        document.getElementById("todoData").deleteRow(i);
    };
});

app.controller('TodoController', function ($scope, StorageService,RetrieveServices,ClearServices) {
    $scope.save = function () {
        StorageService.store($scope,RetrieveServices);
    };

    $scope.showClear = function () {
        ClearServices.show($scope);
    };

    $scope.hideShow = function () {
        ClearServices.hide($scope);
    }
    
    $scope.deleteItem = function (thisRow,value) {
        ClearServices.delete(thisRow,value);
    };
});