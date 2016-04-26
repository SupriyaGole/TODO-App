var app;
app = angular.module('form',[]);
app.controller('FormController',['$scope',function($scope){
    $scope.checkIfEnterKeyPressed = function (event,userInput) {
        var keyCode = event.keyCode;
        if(keyCode==13){
            var notification = document.getElementById("notification"); //todo list div
            var node = document.createElement("div");   //every element in todo list as div
            node.setAttribute("id","todoList"); //style to every div of item
            var tagToadd = document.createElement("ul"); //value in div
            var input = document.createTextNode(userInput); //user entered input
            tagToadd.appendChild(input);
            node.appendChild(tagToadd);
            notification.appendChild(node);
            document.getElementById("input").value=""; //clear input box after every submission of item
        }
    }
}]);

