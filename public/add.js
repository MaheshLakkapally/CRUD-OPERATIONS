var app = angular.module("addContactCtrlModule", ['ui.router']);

app.controller("addContactCtrl", function($scope, $state, $http, contactsService) {

    $scope.saveContact = function() {

        var addPerson = {

            "firstName": $scope.firstName,
            "lastName": $scope.lastName,
            "email": $scope.email,
            "phone": $scope.phone,
            "work": $scope.work
        }

        console.log(JSON.stringify(addPerson));

        var postObj = contactsService.postContacts(addPerson);
        postObj.then(function(response) {

            console.log(JSON.stringify(response));
            $state.go("home.Contactlist");
        });
    }
});
