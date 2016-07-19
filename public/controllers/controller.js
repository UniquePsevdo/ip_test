angular.module("testTaskApp", ["ngRoute", 'ngMaterial', 'appServices'])
    .constant("baseUrl", "http://aqueous-plains-11730.herokuapp.com/")
    /*.constant("baseUrl", "http://localhost:3000")*/
    .config(function ($locationProvider, $routeProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when("/", {
            templateUrl: "client-views/main.html"
        });

    })
    .controller("ipCtrl", ['$scope', 'apiService', function ($scope, apiService) {
        $scope.us_voted = [];
        $scope.fr_voted = [];
        $scope.us_providers = [];
        $scope.fr_providers = [];
        $scope.us_result = [];
        $scope.fr_result = [];
        $scope.us_result_prov = [];
        $scope.fr_result_prov = [];
        $scope.vpn_us_providers = ['ExpressVPN Los Angeles', 'ExpressVPN USA Miami', 'ExpressVPN Miami', 'VyprVPN USA New York','VyprVPN USA Miami', 'ExpressVPN Washington DC', 'ExpressVPN Washington DC-2', 'ExpressVPN Chicago', 'ExpressVPN Dallas', 'ExpressVPN Hollywood', 'ExpressVPN San Francisco', 'ExpressVPN New Jersey 1', 'ExpressVPN New York', 'ExpressVPN Las Vegas', 'ExpressVPN San Francisco', 'ExpressVPN San Jose', 'ExpressVPN Seattle', 'ExpressVPN Tampa-1'];
        $scope.vpn_fr_providers = ['ExpressVPN France', 'ExpressVPN Switzerland', 'ExpressVPN Frankfurt-1', 'ExpressVPN Canada Montreal-2', 'VyprVPN France', 'VyprVPN Germany', 'VyprVPN Spain', 'VyprVPN United Kingdom', 'VyprVPN Belgium', 'VyprVPN Canada', 'VyprPN Luxembourg', 'VyprVPN Switzerland', 'ExpressVPN Luxembourg', 'ExpressVPN Canada - Vancouver', 'ExpressVPN Canada - Toronto'];

        $scope.us_total = 2500;
        $scope.fr_total = 2500;

        apiService.getUSVoted().then(function(data){
            $scope.us_voted = data;
            for(var i = 0; i < $scope.us_voted.length; i++){
                if(i === 0){
                    $scope.us_providers.push($scope.us_voted[i].cityId);
                }else{
                    if($scope.us_providers.indexOf($scope.us_voted[i].cityId)===-1){
                        $scope.us_providers.push($scope.us_voted[i].cityId);
                    }
                }
            }

            $scope.us_provider_required = parseInt($scope.us_total/$scope.us_providers.length);
            for(var j = 0; j < $scope.us_providers.length; j++){
                $scope.us_result.push({name: $scope.us_providers[j], arr:[], sutki:"", currentNumber:""});
            }

            for(var z = 0; z < $scope.us_voted.length; z++){
                for(var s = 0; s < $scope.us_result.length; s++){
                    if($scope.us_result[s].name === $scope.us_voted[z].cityId){
                        $scope.us_result[s].arr.push($scope.us_voted[z]);
                    }
                }
            }
            for(var f =0; f < $scope.us_result.length; f++){
                var sutkiCounter = 0;
                var now = new Date();
                var beforeYesterday1  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                for(var l=0; l < $scope.us_result[f].arr.length; l++){
                    if(beforeYesterday1 > new Date($scope.us_result[f].arr[l].votingDate)){
                        sutkiCounter++;
                    }
                }
                $scope.us_result[f].sutki = sutkiCounter;
                $scope.us_result[f].currentNumber = $scope.us_result[f].arr.length;
            }



            $scope.us_provider_required_2 = parseInt($scope.us_total/$scope.vpn_us_providers.length);
            for(var a =0; a < $scope.vpn_us_providers.length; a++){
                $scope.us_result_prov[a] = {name: $scope.vpn_us_providers[a], arr: [], sutki:"",  currentNumber: ""};
                for(var h=0; h < $scope.us_voted.length; h++){
                    if($scope.us_voted[h].cityId.indexOf($scope.vpn_us_providers[a]) > -1){
                        $scope.us_result_prov[a].arr.push($scope.us_voted[h]);
                    }
                }

                for(var u =0; u < $scope.us_result_prov.length; u++){
                    var sutkiCounter = 0;
                    var now = new Date();
                    var beforeYesterday2  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                    for(var w=0; w < $scope.us_result_prov[u].arr.length; w++){
                        if(beforeYesterday2 > new Date($scope.us_result_prov[u].arr[w].votingDate)){
                            sutkiCounter++;
                        }
                    }
                    $scope.us_result_prov[u].sutki = sutkiCounter;
                    $scope.us_result_prov[a].currentNumber = $scope.us_result_prov[a].arr.length;
                }
            }
            console.log($scope.us_result_prov);

        });

        apiService.getFRVoted().then(function(data){
            $scope.fr_voted = data;
            for(var m = 0; m < $scope.fr_voted.length; m++){
                if(m === 0){
                    $scope.fr_providers.push($scope.fr_voted[m].cityId);
                }else{
                    if($scope.fr_providers.indexOf($scope.fr_voted[m].cityId)===-1){
                        $scope.fr_providers.push($scope.fr_voted[m].cityId);
                    }
                }
            }
            $scope.fr_provider_required = parseInt($scope.fr_total/$scope.fr_providers.length);
            for(var o = 0; o < $scope.fr_providers.length; o++){
                $scope.fr_result.push({name: $scope.fr_providers[o], arr:[], sutki:"", currentNumber:""});
            }

            for(var y = 0; y < $scope.fr_voted.length; y++){
                for(var s = 0; s < $scope.fr_result.length; s++){
                    if($scope.fr_result[s].name === $scope.fr_voted[y].cityId){
                        $scope.fr_result[s].arr.push($scope.fr_voted[y]);
                    }
                }
            }

            for(var b =0; b < $scope.fr_result.length; b++){
                var sutkiCounter = 0;
                var now = new Date();
                var beforeYesterday3  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                for(var q=0; q < $scope.fr_result[b].arr.length; q++){
                    if(beforeYesterday3 > new Date($scope.fr_result[b].arr[q].votingDate)){
                        sutkiCounter++;
                    }
                }
                $scope.fr_result[b].sutki = sutkiCounter;
                $scope.fr_result[b].currentNumber = $scope.fr_result[b].arr.length;
            }


            $scope.fr_provider_required_2 = parseInt($scope.fr_total/$scope.vpn_fr_providers.length);
            for(var x =0; x < $scope.vpn_fr_providers.length; x++){
                $scope.fr_result_prov[x] = {name: $scope.vpn_fr_providers[x], arr: [], sutki:"",  currentNumber: ""};
                for(var d=0; d < $scope.fr_voted.length; d++){
                    if($scope.fr_voted[d].cityId.indexOf($scope.vpn_fr_providers[x]) > -1){
                        $scope.fr_result_prov[x].arr.push($scope.fr_voted[d]);
                    }
                }

                for(var v =0; v < $scope.fr_result_prov.length; v++){
                    var sutkiCounter = 0;
                    var now = new Date();
                    var beforeYesterday4  = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                    for(var p=0; p < $scope.fr_result_prov[v].arr.length; p++){
                        if(beforeYesterday4 > new Date($scope.fr_result_prov[v].arr[p].votingDate)){
                            sutkiCounter++;
                        }
                    }
                    $scope.fr_result_prov[v].sutki = sutkiCounter;
                    $scope.fr_result_prov[x].currentNumber = $scope.fr_result_prov[x].arr.length;
                }
            }
            console.log($scope.fr_result_prov);

        });

    }]);
