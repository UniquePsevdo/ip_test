angular.module("testTaskApp", ["ngRoute", 'ngMaterial'])
    .constant("baseUrl", "http://aqueous-plains-11730.herokuapp.com/")
    /*.constant("baseUrl", "http://localhost:3000")*/
    .controller("ipCtrl", ['$scope', '$location', '$timeout', '$mdToast', function ($scope, $location, $timeout, $mdToast) {


    }]);