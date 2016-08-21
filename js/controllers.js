var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MycController($scope) {

    $scope.author = {
    'name' : 'Gerry Ramos',
    'title' : 'Site Creator',
    'company' : 'Barracuda Networks'
    }
});
