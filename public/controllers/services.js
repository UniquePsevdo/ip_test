var appServices = angular.module('appServices', []);

appServices.factory('apiService', ['$http', '$q', function($http, $q) {
    return {
        getUSVoted: function(){
            var deferred = $q.defer();
            $http({
                url: '/api/us-votes',
                method: "GET"
            }).then(function(response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        },
        getFRVoted: function(){
            var deferred = $q.defer();
            $http({
                url: '/api/fr-votes',
                method: "GET"
            }).then(function(response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }
    };
}]);