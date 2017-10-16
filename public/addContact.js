var app = angular.module("cocntacts", ['ui.router', 'ui.bootstrap']);

app.controller("homeController", function($scope, $state, $http, contactsService) {

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
            $state.go("Contactslist");
        });

    }
});
