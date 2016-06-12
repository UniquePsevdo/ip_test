angular.module("testTaskApp", ["ngRoute", 'ngMaterial'])
    /*.constant("baseUrl", "http://aqueous-plains-11730.herokuapp.com/")*/
    .constant("baseUrl", "http://localhost:3000")
    .controller("ipCtrl", ['$scope', '$location', '$timeout', '$mdToast', '$window', function ($scope, $location, $timeout, $mdToast, $window) {

        $scope.user = {
            name:       "",
            email:      "",
            city:       "",
            country:    "",
            gender:     ""
        };

        $scope.redirectVotingPage = function(){
            $window.location.href = '/voting';
        }

        $scope.redirectApprovePage = function(){
            $window.location.href = '/approve';
        }

        $scope.redirectLastPage = function(){
            $window.location.href = '/last';
        }

    }]);